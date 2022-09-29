import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getInventariosId, editInventarios } from "../../Services/InventarioService";
import { getUsuarios } from "../../Services/UsuarioService";
import { getMarcas } from "../../Services/MarcasService";
import { getTipos } from "../../Services/TiposService";
import { getEstados } from "../../Services/EstadosService";
import Swal from "sweetalert2";

export const InventarioUpdate = () => {
  const { inventarioId = '' } = useParams();
  const [ inventario, setInventario ] = useState({});
  const [valoresForm, setValoresForm] = useState({});
  const [usuarios, setUsuarios] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [estados, setEstados] = useState([]);
  const {
    serial = "",
    modelo = "",
    descripcion = "",
    color = "",
    foto = "",
    fechaCompra = "",
    precio = "",
    usuario,
    marca,
    tipo,
    estado,
  } = valoresForm;

  const listarUsuarios = async () => {
    try {
      const { data } = await getUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listarUsuarios();
  }, []);

  const listarMarcas = async () => {
    try {
      const { data } = await getMarcas();
      setMarcas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarMarcas();
  }, []);

  const listarTipos = async () => {
    try {
      const { data } = await getTipos();
      setTipos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarTipos();
  }, []);

  const listarEstados = async () => {
    try {
      const { data } = await getEstados();
      setEstados(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarEstados();
  }, []);

  const getInventario = async () => {
    try {
      Swal.fire({
        allowOutSideClick: false,
        text: "Cargando...",
      });
      Swal.showLoading();
      const { data } = await getInventariosId(inventarioId);
      setInventario(data)
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };

  useEffect(() => {
      
  getInventario();
  console.log(inventarioId);
  },[inventarioId]); 

  useEffect(() => {
        setValoresForm({ 
            serial: inventario.serial,
            modelo: inventario.modelo,
            descripcion: inventario.descripcion,
            color: inventario.color,
            foto: inventario.foto,
            fechaCompra: inventario.fechaCompra,
            precio: inventario.precio,
            usuario: inventario.usuario,
            marca: inventario.marca,
            tipo: inventario.tipoEquipo,
            estado: inventario.estadoEquipo,            
        });
  },[ inventario ]);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const inventario = {
      serial,
      modelo,
      descripcion,
      color,
      foto,
      fechaCompra,
      precio,
      usuario: {
        _id: usuario,
      },
      marca: {
        _id: marca,
      },
      tipoEquipo: {
        _id: tipo,
      },
      estadoEquipo: {
        _id: estado,
      },
    };

    try {
      Swal.fire({
        allowOutSideClick: false,
        text: "Cargando...",
      });
      Swal.showLoading();
      const { data } = await editInventarios( inventarioId, inventario );
      console.log(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      console.log(error.response.data)
      Swal.close();
      let mesaje;
      if (error && error.response && error.response.data) {
          mesaje= error.response.data;
      }else{
        mesaje = 'Hay un error, es necesario verificar los datos';
      }
      Swal.fire('Error', mesaje, 'Error');
    }

  };

  return <div className="container-fluid mt-3 mb-2">
    <div className="card">
      <div className="card-header">
          <h5 className="card-title">Desalle Activo</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
              <img className="imginv" src={inventario?.foto}></img>
          </div>
          <div className="col-md-8">
          <form onSubmit={(e) => handleOnSubmit(e)}>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Serial</label>
                <input
                  required
                  type="text"
                  name="serial"
                  value={serial}
                  onChange={(evento) => handleOnChange(evento)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Modelo</label>
                <input
                  required
                  type="text"
                  name="modelo"
                  value={modelo}
                  onChange={(evento) => handleOnChange(evento)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Descripcion</label>
                <input
                  required
                  type="text"
                  name="descripcion"
                  value={descripcion}
                  onChange={(evento) => handleOnChange(evento)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Color</label>
                <input
                  required
                  type="text"
                  name="color"
                  value={color}
                  onChange={(evento) => handleOnChange(evento)}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Foto</label>
                <input
                  required
                  type="url"
                  name="foto"
                  value={foto}
                  onChange={(evento) => handleOnChange(evento)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Fecha Compra</label>
                <input
                  required
                  type="date"
                  name="fechaCompra"
                  value={fechaCompra}
                  onChange={(evento) => handleOnChange(evento)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Precio</label>
                <input
                  required
                  type="number"
                  name="precio"
                  value={precio}
                  onChange={(evento) => handleOnChange(evento)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Usuario</label>
                <select
                  className="form-select"
                  onChange={(evento) => handleOnChange(evento)}
                  name="usuario"
                  value={usuario}
                >
                  <option value="">--Seleccione--</option>
                  {usuarios.map((usuario) => {
                    return (
                      <option key={usuario._id} value={usuario._id}>
                        {usuario.nombre}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Marca</label>
                <select
                  className="form-select"
                  onChange={(evento) => handleOnChange(evento)}
                  name="marca"
                  value={marca}
                >
                  <option value="">--Seleccione--</option>
                  {marcas.map((marca) => {
                    return (
                      <option key={marca._id} value={marca._id}>
                        {marca.nombre}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Tipo</label>
                <select
                  className="form-select"
                  onChange={(evento) => handleOnChange(evento)}
                  name="tipo"
                  value={tipo}
                >
                  <option value="">--Seleccione--</option>
                  {tipos.map((tipo) => {
                    return (
                      <option key={tipo._id} value={tipo._id}>
                        {tipo.nombre}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Estado Equipo</label>
                <select
                  className="form-select"
                  onChange={(evento) => handleOnChange(evento)}
                  name="estado"
                  value={estado}
                >
                  <option value="">--Seleccione--</option>
                  {estados.map((estado) => {
                    return (
                      <option key={estado._id} value={estado._id}>
                        {estado.nombre}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary">Guardar</button>
            </div>
          </div>
        </form>
          </div>
        </div>
      </div>
    </div>

  </div>;
};
