import { axiosConfig } from "../Helpers/axios-config";

const getEstados = () => {
    return axiosConfig.get('estadoEquipo/listar',{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const crearEstados= (data) => {
    return axiosConfig.post('estadoEquipo/guardar',data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const editEstados = (estadoId, data) => {
    return axiosConfig.put(`estadoEquipo/editar/${estadoId}`,data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

export {
    getEstados, crearEstados, editEstados
}

