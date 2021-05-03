import { useFormik } from 'formik';
import React, { useRef, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import { AuthContext } from '../utils/authContext';
import { Redirect } from 'react-router-dom';

export const Login: React.FC = () => {
    const { isAuthorized, setAuthorized }  = useContext(AuthContext);
    const nameRef: React.MutableRefObject<HTMLInputElement> = useRef();
    const enum loginStatus { OK, ERROR }

    const f = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        initialStatus: loginStatus.OK,
        onSubmit: async ({ username, password }, { setStatus }) => {
            const payload = { username, password };

            try {
                const response = await axios.post('/api/v1/login', payload);
                localStorage.setItem('user', JSON.stringify(response.data));
                setAuthorized(true);
            } catch (e) {
                setStatus(loginStatus.ERROR);
            }
        },
    });

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    return (
        <>
        {isAuthorized && <Redirect to="/" />}
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
                                isInvalid={f.status === loginStatus.ERROR}
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
                                isInvalid={f.status === loginStatus.ERROR}
                                required={true}
                            />
                            <Form.Control.Feedback type="invalid">
                                {f.status === loginStatus.ERROR && 'Неверные имя пользователя или пароль'}
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
        </>
    );
};
