import React from 'react';

// import { Container } from './styles';

function ParImpar(props) {
    return (
        <div>
            {props.number % 2 === 0 ? (

                <span>Par</span>

            ) : (
                    <span>Impar</span>

                )}
        </div>
    );
}

export default ParImpar;