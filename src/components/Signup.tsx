import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

import { getSignupSchema } from '../utils/validators';

export const Signup: React.FC = () => {
    const nameRef: React.MutableRefObject<HTMLInputElement> = useRef();
    const f = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: getSignupSchema(),
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
                            <Form.Label htmlFor="username">Имя пользователя</Form.Label>
                            <Form.Control
                                id="username"
                                name="username"
                                autoComplete="username"
                                value={f.values.username}
                                onChange={f.handleChange}
                                onBlur={f.handleBlur}
                                isInvalid={f.errors.username && !!f.errors.username}
                                required={true}
                                placeholder="От 3 до 20 символов"
                                ref={nameRef}
                            />
                            <Form.Control.Feedback type="invalid">
                                {f.errors.username && f.errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="password">Пароль</Form.Label>
                            <Form.Control
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                value={f.values.password}
                                onChange={f.handleChange}
                                onBlur={f.handleBlur}
                                isInvalid={f.touched.password && !!f.errors.password}
                                required={true}
                                placeholder="Не менее 6 символов"
                            />
                            <Form.Control.Feedback type="invalid">
                                {f.touched.password && f.errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="confirmPassword">Подтвердите пароль</Form.Label>
                            <Form.Control
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                value={f.values.confirmPassword}
                                onChange={f.handleChange}
                                onBlur={f.handleBlur}
                                isInvalid={f.touched.confirmPassword && !!f.errors.confirmPassword}
                                required={true}
                                placeholder="Пароли должны совпадать"
                            />
                            <Form.Control.Feedback type="invalid">
                                {f.touched.confirmPassword && f.errors.confirmPassword}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit" variant="outline-primary" className="w-100 mb-3">
                            Зарегистрироваться
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};
