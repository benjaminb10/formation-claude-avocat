# Notes de développement

## Stack
- TanStack Start v1.95.5 avec SSR
- Tailwind CSS + shadcn/ui
- Drizzle ORM
- Déployé sur Vercel

## SSR et Scripts JavaScript

### Problème
Les scripts inline avec `<script dangerouslySetInnerHTML={{ __html: '...' }} />` **ne s'exécutent PAS** en production SSR. React rend le HTML mais le navigateur n'exécute pas les scripts injectés via innerHTML.

### Solution
1. Mettre tous les scripts interactifs dans un fichier externe : `public/scripts/animations.js`
2. Charger ce fichier dans `__root.tsx` : `<script src="/scripts/animations.js" defer />`
3. Dans le script, attendre que React finisse de rendre (car `createRoot` remplace le DOM) :
```js
function waitForElements() {
  if (document.getElementById('mon-element')) {
    init();
  } else {
    setTimeout(waitForElements, 100);
  }
}
setTimeout(waitForElements, 100);
```

### Hydratation React
On utilise `createRoot` au lieu de `hydrateRoot` dans `client.tsx` pour éviter les erreurs d'hydratation (#418, #423). Cela signifie que React fait un rendu complet côté client au lieu d'hydrater le HTML existant.

### CSS
- Pas de `<style>` inline dans les composants (cause des erreurs d'hydratation)
- Tout mettre dans `globals.css`

## Fichiers clés
- `public/scripts/animations.js` - Toutes les animations/interactions vanilla JS
- `app/styles/globals.css` - CSS global incluant les animations
- `app/client.tsx` - Point d'entrée client (utilise createRoot)
- `app/routes/__root.tsx` - Layout racine avec meta SEO
