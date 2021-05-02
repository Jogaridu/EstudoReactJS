import React, { useState } from 'react';
import ChildIndirect from "./ChildIndirect"

// import { Container } from './styles';

function ParentIndirect() {

    const [name, setName] = useState("?");
    const [number, setNumber] = useState(0);
    const [bool, setBool] = useState(false);

    function sendInfo(name, number, bool) {
        setName(name);
        setNumber(number);
        setBool(bool);
    }

    return (<>

        <div>Pai</div>

        <div>
            <span>{name} </span> ||
            <span>{number} </span> ||
            <span> {bool ? "Verdadeiro" : "Falso"}! </span>
        </div>

        < ChildIndirect sendInfo={sendInfo} />

    </>
    );
}

export default ParentIndirect;