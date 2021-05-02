import React from 'react';
import "./App.css";

import FirstComponent from "./components/basics/First"; // -> Importando componente criado
import CompParams from "./components/basics/CompParams"; // -> Importando componente criado
import Fragments from "./components/basics/Fragments";
import Random from "./components/basics/RandomChallange";
import Card from "./components/layout/Card";
import Family from "./components/basics/Family"
import ListStudent from './components/repeat/ListStudent';
import TableProducts from './components/repeat/TableProducts';
import ParImpar from './components/condictions/ParImpar';
import InfoUser from './components/condictions/InfoUser';
import ParentDirect from './components/comunication/ParentDirect';
import ParentIndirect from './components/comunication/ParentIndirect';
import Input from './components/form/Input';
import Accountant from './components/accountant/Accountant';

export default _ => {
    return (
        <div className="app">

            <h1>Fundamentos ReactJs</h1>

            <div className="cards">
                <Card titulo="#12 - Contador" color="#424242">
                    <Accountant numberInit={15} pass={2} />
                </Card>

                <Card titulo="#11 - Componente controlado" color="#E45F56">
                    <Input />
                </Card>

                <Card titulo="#10 - Comunicação indireta" color="#8BAD39">
                    <ParentIndirect />
                </Card>

                <Card titulo="#9 - Comunicação direta" color="#59323C">
                    <ParentDirect />
                </Card>

                <Card titulo="#8 - Rederização condicional" color="#982325">
                    <ParImpar number={21} />
                    <InfoUser user={{ name: "Jorge" }} />
                    <InfoUser user={{ email: "jorge@gmail.com" }} />
                </Card>

                <Card titulo="#7 - Desafio de repetição" color="#3A9AD9">
                    <TableProducts />
                </Card>

                <Card titulo="#6 - Repetição" color="#FF4C65">
                    <ListStudent>

                    </ListStudent>
                </Card>

                <Card titulo="#5 - Componente com Filhos" color="#F50">
                    <Family surname="Silva" />
                </Card>

                <Card titulo="#4 - Desafio número aleatório" color="#F50">
                    <Random min={5} max={50} />
                </Card>

                <Card titulo="#3 - Trabalhando com fragmentos">
                    <Fragments />
                </Card>

                <Card titulo="#2 - Segundo componente">
                    <CompParams
                        titulo="Segundo componente"
                        subtitulo="Muito legal!" />
                </Card>

                <Card titulo="#1 - Primeiro componente">
                    <FirstComponent />
                </Card>
            </div>


        </div>
    );
}