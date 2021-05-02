import React from 'react';
import { useState } from 'react';

function Accountant(props) {

    const [numberInit, setNumberInit] = useState(props.numberInit || 0);
    const [pass, setPass] = useState(props.pass || 0);

    const incrementNumber = () => setNumberInit(numberInit + pass);
    const decrementNumber = () => setNumberInit(numberInit - pass);
    const changePass = (event) => setPass(Number(event.target.value))


    return (<>
        <div>
            {numberInit} <br />
            <hr />
            <label htmlFor="pass">Pass: </label>
            <input type="number" id="pass" onChange={changePass} value={pass} />
        </div>
        <hr />
        <button onClick={incrementNumber}> + </button>
        <button onClick={decrementNumber}> - </button>
    </>);
}

export default Accountant;