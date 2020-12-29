import {
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS
} from '../types/index';

import clienteAxios from '../config/axios';

export default function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch (descargarProducto())

        try {
            const resultado = await clienteAxios.get('/productos');
            dispatch(descargaExitosa(resultado.data));
        } catch (error) {
            console.log(error);
            dispatch(descargaErronea());
        }
    }
}
const descargarProducto = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaErronea = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})