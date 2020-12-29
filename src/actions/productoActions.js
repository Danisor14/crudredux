import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch(agregarProduto());

        try {
            //insertar en la API
           await clienteAxios.post('/productos', producto)

            dispatch (agregarProdutoExito(producto));

            //alerta
            Swal.fire(
                'Correcto',
                'El porducto se agrego correctamente',
                'success'            )
        } catch (error) {
            dispatch(agregarProdutoError(true));

            //alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                test: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const agregarProduto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

// si el producto se guarda en la base de datos
const agregarProdutoExito = producto => ({
   type: AGREGAR_PRODUCTO_EXITO,
   payload: producto 
});

const agregarProdutoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

