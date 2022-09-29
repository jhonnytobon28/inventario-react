import React from 'react'

export const UsuarioCard = (props) => {

const {usuario} = props; 

  return (
    <div className="col" key={usuario._id}>
    <div className="card">
      <img src={usuario.foto} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Nombre: {usuario.nombre}</h5>
        <p className="card-text"> email: {usuario.email}</p>
      </div>
    </div>
  </div>
  )
}
