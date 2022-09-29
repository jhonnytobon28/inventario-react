import React from 'react'

export const MarcaCard = (props) => {

 const{marca} = props;

  return (
    <div className="col" key={marca._id}>
    <div className="card">
      <img src={marca.foto} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Marca: {marca.nombre}</h5>
      </div>
    </div>
  </div>
  );
};
