import * as yup from 'yup';

interface User {
    username: string;
    password: string;
    confirmPassword?: string;
}

// export const getLoginSchema = (): yup.SchemaOf<User> => {
//     const schema = yup.object({
//         username: yup.string().min(3), // TODO make validation
//         password: yup.string().min(3), // TODO make validation
//         confirmPassword: yup.string().strip(),
//     });

//     return schema;
// };

export const getSignupSchema = (): yup.SchemaOf<User> => {
    const schema = yup.object({
        username: yup
            .string()
            .trim()
            .min(3, 'От 3 до 20 символов')
            .max(20, 'От 3 до 20 символов')
            .required('Обязательное поле'),
        password: yup.string().trim().min(6, 'Не менее 6 символов').required('Обязательное поле'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
    });

    return schema;
};
