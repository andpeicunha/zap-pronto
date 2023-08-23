import z from 'zod';

export const personSchema = z.object({
  name: z
    .string({ required_error: 'Campo obrigatório' })
    .min(3, 'Não pode ter menos que 3 letras')
    .max(25, 'Não pode ser maior que 25 letras')
    .nonempty('Nome é um campo obrigatório'),
  email: z.string({ required_error: 'Campo obrigatório' }).min(3).max(25).nonempty('E-mail é um campo obrigatório'),
});
