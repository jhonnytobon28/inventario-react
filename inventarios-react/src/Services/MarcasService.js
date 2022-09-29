import { axiosConfig } from "../Helpers/axios-config";

const getMarcas = () => {
    return axiosConfig.get('marca/listar',{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const crearMarcas = (data) => {
    return axiosConfig.post('marca/guardar',data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const editMarcas = (marcaId, data) => {
    return axiosConfig.put(`marca/editar/${marcaId}`,data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

export {
    getMarcas, crearMarcas, editMarcas
}

