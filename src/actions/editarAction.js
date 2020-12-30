import {
    OBTENER_PRODUCTO_EIDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITAADO_ERROR,
    COMENZAR_EDICION_PRODUCTO,
} from '../types/index';
import clienteAxios from '../config/axios';

export default function obtenerProductoEditar(producto){
    return {
        type: OBTENER_PRODUCTO_EIDITAR,
        payload: producto
    }
}

export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch(editarProducto())

        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);
            dispatch(editadoExito(producto));
        } catch (error) {
            
        }
    }
}

const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO,
})

const editadoExito = (producto) => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto  
})
