import React from 'react';

export default function Fragments() {

    // Fragmentos -> São utilizados caso você não queira envolver os elementos HTML em uma outra TAG
    // Uma forma resumida também para se usar é deixando a tag vázia: <></> 
    // Mas nesse jeito simplificado não pode passar atribustos/propriedades
    
  return (
      <React.Fragment> 
          <h2>Isso é um fragmento</h2>
          <p>Cuidado com esse erro!</p>
      </React.Fragment>
  );
}