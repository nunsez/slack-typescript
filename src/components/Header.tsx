import React from 'react';
import { Button, Navbar } from 'react-bootstrap';

export const Header: React.FC = () => (
    <Navbar bg="light" expand="lg" className="mb-3">
        <Navbar.Brand className="mr-auto" href="/">
            Hexlet Chat
        </Navbar.Brand>
        <Button>Выйти</Button>
    </Navbar>
);
