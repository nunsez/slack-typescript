import React, { useState } from 'react';
import { Header } from './components/Header';
import { AuthContext } from './utils/authContext';

type Props = {
    children?: React.ReactNode;
};

export const App: React.FC = ({ children }: Props) => {
    const userToken = localStorage.getItem('user') || null;
    const [isAuthorized, setAuthorized] = useState(userToken !== null);

    return (
        <AuthContext.Provider value={{ isAuthorized, setAuthorized }}>
            <div className="d-flex flex-column h-100">
                <Header />
                {children}
            </div>
        </AuthContext.Provider>
    );
};
