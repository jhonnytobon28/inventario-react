import React, { useState, useEffect } from "react";
import { getUsuarios } from "../../Services/UsuarioService";
import { getMarcas } from "../../Services/MarcasService";
import { getTipos } from "../../Services/TiposService";
import { getEstados } from "../../Services/EstadosService";
import { crearInventarios } from "../../Services/InventarioService";
import Swal from "sweetalert2";

export const InventarioNew = ({ handleOpenModal, listarInventarios }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [estados, setEstados] = useState([]);
  const [valoresForm, setValoresForm] = useState({});
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
      const { data } = await crearInventarios(inventario);
      console.log(data);
      Swal.close();
      handleOpenModal();
      listarInventarios();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };

  return (
    <div className="sideBar">
      <div className="container-fluiod">
        <div className="row">
          <div className="col">
            <div className="sidebar-header">
              <h3>Nuevo inventario</h3>
              <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
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
  );
};
