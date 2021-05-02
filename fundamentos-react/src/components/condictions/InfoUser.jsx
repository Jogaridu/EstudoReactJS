import React from 'react';
import If from "./If";
// import { Container } from './styles';

export default ({ user }) => {
    return (
        <div>
            <If test={user && user.name}>
                Seja bem-vindo <strong>{user.name}</strong>
            </If>

            <If test={!user || !user.name}>
                Seja bem-vindo <strong>amigo</strong>
            </If>
        </div>
    );
}

