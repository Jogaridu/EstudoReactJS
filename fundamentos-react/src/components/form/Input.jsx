import React from 'react';
import { useState } from 'react';

function Input() {

    const [value, setValue] = useState("Inicial");

    const changeInput = event => {
        setValue(event.target.value);
    }

    return (<>
        <input value={value} onChange={changeInput} />
        <hr />
        <div>{value}</div>
    </>)
}

export default Input;