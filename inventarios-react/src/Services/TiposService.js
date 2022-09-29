import { axiosConfig } from "../Helpers/axios-config";

const getTipos= () => {
    return axiosConfig.get('tipoEquipo/listar',{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const crearTipos= (data) => {
    return axiosConfig.post('tipoEquipo/guardar',data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const editTipos = (tipoId, data) => {
    return axiosConfig.put(`tipoEquipo/editar/${tipoId}`,data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

export {
    getTipos, crearTipos, editTipos
}