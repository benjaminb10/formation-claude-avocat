import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const quoteRequests = sqliteTable('quote_requests', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  nom: text('nom').notNull(),
  email: text('email').notNull(),
  cabinet: text('cabinet').notNull(),
  taille: text('taille', { enum: ['1-5', '5-15', '15-30', '30+'] }).notNull(),
  message: text('message'),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .$defaultFn(() => new Date())
    .notNull(),
})

export type QuoteRequest = typeof quoteRequests.$inferSelect
export type NewQuoteRequest = typeof quoteRequests.$inferInsert
