import React from 'react';

import './styles.css';

export default (props) => {

  const styleCard = {
    backgroundColor: props.color || "#F00",
    borderColor: props.color || "#F00"

  }

  return (
        <div className="card" style={styleCard}>
            <div className="title">{ props.titulo }</div>
            <div className="content">
                {props.children}
            </div>
        </div>
  );
}