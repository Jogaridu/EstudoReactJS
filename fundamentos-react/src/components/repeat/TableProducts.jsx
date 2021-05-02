import React from 'react';
import arrayProducts from "./../../data/products";

export default props => {

    const productJsx = arrayProducts.map(product => {
        return (
            <tr key={product.id}>

                <td>{product.id}</td> |
                <td>{product.name}</td> |
                <td>{product.price}</td>

            </tr>
        )
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {productJsx}
            </tbody>
        </table>
    );
}