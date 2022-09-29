import { axiosConfig } from '../Helpers/axios-config';

const getInventarios = () => {
    return axiosConfig.get('inventario/listar',{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const crearInventarios = (data) => {
    return axiosConfig.post('inventario/guardar',data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const editInventarios = (inventarioId, data) => {
    return axiosConfig.put(`inventario/editar/${inventarioId}`,data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const getInventariosId = (inventarioId) => {
    return axiosConfig.get(`inventario/${inventarioId}`,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

export {
    getInventarios, crearInventarios, editInventarios, getInventariosId
}
