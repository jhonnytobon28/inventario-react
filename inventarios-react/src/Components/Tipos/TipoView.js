import React, { useState, useEffect } from "react";
import { getTipos } from "../../Services/TiposService";
import { TipoCard } from "./TipoCard";
import { TipoNew } from "./TipoNew";

export const TipoView = () => {
  const [tipos, setTipos] = useState([]);
  const [openModal, setOpenModal] = useState(false);

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

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {tipos.map((tipo) => {
          return <TipoCard key={tipo._id} tipo={tipo} />;
        })}
      </div>
      {openModal ? (
        <TipoNew
          handleOpenModal={handleOpenModal}
          listarTipos={listarTipos}
        />
      ) : (
        <button className="btn btn-primary fab" onClick={handleOpenModal}>
          <i className="fa-solid fa-plus"></i>
        </button>
      )}
    </div>
  );
};
