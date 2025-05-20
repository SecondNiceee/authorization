import {z} from 'zod';

export const registrationSchema = z.object({
    email : z.string().min(1, "Email обязательен").email("Невалидные email"),
    password : z.string().min(5, "Пароль должен быть больше 5 символов"),
    confirmPassword : z.string()
}).superRefine( (data, ctx) => {
    if (data.confirmPassword !== data.password){
        ctx.addIssue({
            code : z.ZodIssueCode.custom,
            message : "Пароль не совпадают",
            path : ["confirmPassword"]
        })
    }
}  )

export type TRegistrationForm = z.infer<typeof registrationSchema>