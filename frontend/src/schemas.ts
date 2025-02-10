import { z } from 'zod';


export const AuthorSchema = z.object({
    id: z.number(),
    name: z.string(),
    bio: z.string().nullable()
})


export const BookSchema = z.object({
    id: z.number(),
    title: z.string(),
    year: z.number(),
    edition: z.number().min(1).default(1),
    author: AuthorSchema
})


export type Author = z.infer<typeof AuthorSchema>
export type Book = z.infer<typeof BookSchema>
