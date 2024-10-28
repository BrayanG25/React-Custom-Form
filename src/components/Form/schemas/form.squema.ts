import { z } from "zod"
import { usernameSchema, emailSchema, passwordSchema, confirmPasswordSquema, passwordLoginSchema } from './dataType.squema'

export const squemaSignUp = z.object({
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSquema
}).refine(data => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ['confirmPassword']
})

export type FormValuesSignUp = z.infer<typeof squemaSignUp>

export const squemaLogIn = z.object({
    email: emailSchema,
    password: passwordLoginSchema,
})

export type FormValuesLogIn = z.infer<typeof squemaLogIn>
