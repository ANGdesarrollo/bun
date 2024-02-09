import { t } from "elysia";

export const LoginBodyValidation = t.Object({
    username: t.String({
        format: "email",
        error: {
            status_code: "400_BAD_REQUEST",
            error: "Invalid email",
        }
    }),
    password: t.String({
        minLength: 8,
        maxLength: 50,
        error: {
            status_code: "400_BAD_REQUEST",
            error: "Min length is 8 and max length is 50"
        }
    })
})
