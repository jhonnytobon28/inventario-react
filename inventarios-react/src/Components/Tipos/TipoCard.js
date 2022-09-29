import React from 'react'

export const TipoCard = (props) => {

const {tipo} = props; 

  return (
    <div className="col" key={tipo._id}>
    <div className="card">
      <img src={tipo.foto} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Tipo: {tipo.nombre}</h5>
        <p className="card-text"> estado: {tipo.estado}</p>
      </div>
    </div>
  </div>
  )
}
