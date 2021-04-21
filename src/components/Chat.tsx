import React from 'react';
import { Redirect } from 'react-router-dom';

export const Chat: React.FC = () => {
    const condition = true;

    if (condition) {
        return <Redirect to="/login" />;
    }

    return <div>Chat</div>;
};
