import { createFileRoute } from '@tanstack/react-router'
import { SiteNav } from '~/components/sections/SiteNav'
import { Hero } from '~/components/sections/Hero'
import { ToolsStrip } from '~/components/sections/ToolsStrip'
import { Contexte } from '~/components/sections/Contexte'
import { Programme } from '~/components/sections/Programme'
import { Livrables } from '~/components/sections/Livrables'
import { Formateurs } from '~/components/sections/Formateurs'
import { Temoignage } from '~/components/sections/Temoignage'
import { Faq } from '~/components/sections/Faq'
import { ContactForm } from '~/components/sections/ContactForm'
import { SiteFooter } from '~/components/sections/SiteFooter'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <ToolsStrip />
        <Contexte />
        <Programme />
        <Livrables />
        <Formateurs />
        <Temoignage />
        <Faq />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  )
}
