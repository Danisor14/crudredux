import{
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types/index';

//muestra alerta
export default function mostrarAlerta(alerta){
    return (dispatch) => {
        dispatch(crearAlerta(alerta));
    }
}

const crearAlerta = (alerta) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})