import { axiosConfig } from "../Helpers/axios-config";

const getUsuarios = () => {
    return axiosConfig.get('usuario/listar',{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const crearUsuarios= (data) => {
    return axiosConfig.post('usuario/guardar',data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const editUsuarios = (usuarioId, data) => {
    return axiosConfig.put(`usuario/editar/${usuarioId}`,data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

export {
    getUsuarios, crearUsuarios, editUsuarios
}