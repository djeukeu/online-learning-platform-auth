import { checkSchema } from 'express-validator';

export const getUserSchema = checkSchema(
    {
        id: {
            errorMessage: 'Invalid ID',
            isString: true,
        },
    },
    ['params']
);
