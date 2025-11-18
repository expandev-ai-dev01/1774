import { z } from 'zod';

export const commonValidations = {
  email: z.string().email('E-mail inválido'),

  name: z.string().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo'),

  phone: z
    .string()
    .regex(/^\+?[\d\s-()]+$/, 'Formato de telefone inválido')
    .min(10, 'Telefone muito curto')
    .max(20, 'Telefone muito longo'),

  positiveNumber: z.number().positive('Deve ser positivo'),

  nonEmptyString: z.string().min(1, 'Campo obrigatório'),
};
