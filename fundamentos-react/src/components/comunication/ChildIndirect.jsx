import React from 'react';

// import { Container } from './styles';

function ChildIndirect({ sendInfo }) {
    return (
        <div>

            <button onClick={_ => sendInfo("Jorge", 19, true)}>Fornecer Informações</button>
        </div>
    );
}

export default ChildIndirect;