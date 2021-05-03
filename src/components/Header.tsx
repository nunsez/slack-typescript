import React, { useContext } from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { AuthContext } from '../utils/authContext';

export const Header: React.FC = () => {
    const { isAuthorized, setAuthorized }  = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setAuthorized(false);
    };

    return (
        <>
            <Navbar bg="light" expand="lg" className="mb-3">
                <Navbar.Brand className="mr-auto" href="/">
                    Hexlet Chat
                </Navbar.Brand>
                {isAuthorized && <Button onClick={handleLogout}>Выйти</Button>}
            </Navbar>
        </>
    );
};
