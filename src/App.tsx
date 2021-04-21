import React from 'react';

import { Header } from './components/Header';

type Props = {
    children?: React.ReactNode;
};

export const App: React.FC = ({ children }: Props) => {
    return (
        <div className="d-flex flex-column h-100">
            <Header />
            {children}
        </div>
    );
};
