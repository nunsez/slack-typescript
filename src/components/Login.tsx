import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const Login: React.FC = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center pt-5">
                <div className="col-sm-4">
                    <Form className="p-3">
                        <Form.Group>
                            <Form.Label htmlFor="username">Ваш ник</Form.Label>
                            <Form.Control
                                id="username"
                                name="username"
                                autoComplete="username"
                                value=""
                                required={true}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="password">Пароль</Form.Label>
                            <Form.Control
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value=""
                                required={true}
                            />
                            <Form.Control.Feedback type="invalid">
                                Неверные имя пользователя или пароль
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
