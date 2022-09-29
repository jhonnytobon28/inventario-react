import React from 'react'

export const EstadosCard = (props) => {

  const{estado} = props;

  return (
    <div className="col" key={estado._id}>
    <div className="card">
      <img src={estado.foto} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{estado.nombre}</h5>
        <p className="card-text">{estado.estado}</p>
      </div>
    </div>
  </div>
  );
};
