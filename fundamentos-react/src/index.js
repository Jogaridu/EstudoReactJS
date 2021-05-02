import ReactDom from "react-dom";
import React from "react" // -> Necessário para poder utilizar o JSX
import "./index.css" // -> Import do CSS

import App from "./App";

// render(componentes, elementoHtml) -> Serve para renderizar no index.html qualquer componente

// JSX -> Sintaxe semelhante ao XML, ele permite colocar HTML no JavaScript

ReactDom.render(
    <App />,
    document.getElementById("root")
);