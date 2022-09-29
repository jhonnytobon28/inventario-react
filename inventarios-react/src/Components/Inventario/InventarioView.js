import React, { useState, useEffect } from "react";
import { getInventarios } from "../../Services/InventarioService";
import { InventarioCard } from "./InventarioCard";
import { InventarioNew } from "./InventarioNew";
import Swal from "sweetalert2";

export const InventarioView = () => {
  const [inventarios, setInventarios] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const listarInventarios = async () => {
    try {
      Swal.fire({
        allowOutSideClick: false,
        text: "Cargando...",
      });
      Swal.showLoading();
      const { data } = await getInventarios();
      setInventarios(data);
      Swal.close();
    } catch (error) {
      console.log(error);
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

  useEffect(() => {
    listarInventarios();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {inventarios.map((inventario) => {
          return (
            <InventarioCard key={inventario._id} inventario={inventario} />
          );
        })}
      </div>
      {openModal ? (
        <InventarioNew
          handleOpenModal={handleOpenModal}
          listarInventarios={listarInventarios}
        />
      ) : (
        <button className="btn btn-primary fab" onClick={handleOpenModal}>
          <i className="fa-solid fa-plus"></i>
        </button>
      )}
    </div>
  );
};
