import { z } from "zod";
export const registerSchema = z.object({
    email: z.string().min(1, 'El email es requerido').email('Email inválido'),
    name: z.string()
        .min(1, 'El nombre es requerido'),
    password: z.string()
        .min(6, 'La contraseña debe tener mínimo 6 caracteres'),
    confirmPassword: z.string()
        .min(6, 'La contraseña debe tener mínimo 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword']
})

export type RegisterFormValues = z.infer<typeof registerSchema>;