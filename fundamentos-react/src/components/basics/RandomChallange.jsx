import React from 'react';

export default props => {

    const valueMin = props.min;
    const valueMax = props.max;

    const randomValue = Math.floor(Math.random() * (valueMax - valueMin + 1)) + valueMin;

    return <h2>O número sorteado entre {valueMin} e {valueMax} foi {randomValue}</h2>;

}