import { useFormik } from 'formik';
import React, { useRef, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

import { getLoginSchema } from '../utils/validators';

export const Login: React.FC = () => {
    const nameRef: React.MutableRefObject<HTMLInputElement> = useRef();
    const f = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: getLoginSchema(),
        onSubmit: () => null,
    });

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center pt-5">
                <div className="col-sm-4">
                    <Form className="p-3" onSubmit={f.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="username">Ваш ник</Form.Label>
                            <Form.Control
                                id="username"
                                name="username"
                                autoComplete="username"
                                value={f.values.username}
                                onChange={f.handleChange}
                                onBlur={f.handleBlur}
                                isInvalid={!!f.errors.username}
                                required={true}
                                ref={nameRef}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="password">Пароль</Form.Label>
                            <Form.Control
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={f.values.password}
                                onChange={f.handleChange}
                                onBlur={f.handleBlur}
                                isInvalid={!!f.errors.password}
                                required={true}
                            />
                            <Form.Control.Feedback type="invalid">
                                {(f.errors.username || f.errors.password) && 'Неверные имя пользователя или пароль'}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit" variant="outline-primary" className="w-100 mb-3">
                            Войти
                        </Button>
                        <div className="d-flex flex-column align-items-center">
                            <span className="small mb-2">Нет аккаунта?</span>
                            <a href="/signup">Регистрация</a>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};
