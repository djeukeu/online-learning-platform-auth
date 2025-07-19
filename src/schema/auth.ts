import { checkSchema } from 'express-validator';

export const registerSchema = checkSchema(
    {
        firstname: {
            errorMessage: 'Invalid firstname',
            isString: true,
        },
        lastname: {
            errorMessage: 'Invalid lastname',
            isString: true,
        },
        role: {
            isIn: {
                options: [['student', 'admin', 'instructor']],
                errorMessage: 'Invalid role',
            },
            optional: true,
        },
        email: {
            errorMessage: 'Invalid email',
            isEmail: true,
        },
        password: {
            isLength: {
                options: { min: 8 },
                errorMessage: 'Password should be at least 8 characters',
            },
        },
    },
    ['body']
);

export const loginSchema = checkSchema(
    {
        email: {
            errorMessage: 'Invalid email',
            isEmail: true,
        },
        password: {
            isLength: {
                options: { min: 8 },
                errorMessage: 'Password should be at least 8 characters',
            },
        },
    },
    ['body']
);
