import{
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types/index';

//cada reducer tiene su state
const initialState =  {
    alerta: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return {
                ...state,
                alerta: action.payload
            }
            break;
        case OCULTAR_ALERTA:
            break
        default:
            return state        
    }
}