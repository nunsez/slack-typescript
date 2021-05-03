import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../utils/authContext';

export const Chat: React.FC = () => {
    const { isAuthorized } = useContext(AuthContext);

    if (!isAuthorized) {
        return <Redirect to="/login" />;
    }

    return <div>Chat: hello</div>;
};
