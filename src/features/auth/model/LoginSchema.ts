import { z } from "zod";

export const loginSchema = z.object({
    email : z.string().min(1, "Email должен быть обязательным").email("Email не валиден"),
    password : z.string().min(1, "Пароль обязателен")
})

export type TLoginSchema = z.infer< typeof loginSchema >