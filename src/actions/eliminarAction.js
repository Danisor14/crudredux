import {
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_ERROR,
    PRODUCTO_ELIMINADO_EXITO
} from '../types/index';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

export default function borrarProductoAction(id){
    return async dispatch => {
        dispatch(obtenerProductoEliminar(id));
        
        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarExito());
            // mostrar alerta de que ah sido eliminado
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        } catch (error) {
            dispatch(eliminarError());
            console.log(error);
        }   
    }
}

const obtenerProductoEliminar = (id) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO,
})

const eliminarError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})
