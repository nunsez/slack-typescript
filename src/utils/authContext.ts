import React from 'react';

interface IContext {
    isAuthorized: boolean;
    setAuthorized?: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContext: IContext = {
    isAuthorized: false,
    setAuthorized: () => null,
};

export const AuthContext = React.createContext(defaultContext);
