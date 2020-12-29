import React, {useState} from 'react';
import {useDispatch , useSelector,} from 'react-redux';
//actions de Redux
import {crearNuevoProductoAction} from '../actions/productoActions'

const NuevoProducto = ({history}) => {
    //utilizar dispach
    const dispatch = useDispatch();
    //state del comoponente
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    //mandar llmar el action de production
    const agregarProducto = producto =>  dispatch(crearNuevoProductoAction(producto));

    //acceder al state del store
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error)

    const submitNuevoProducto = e => {
        e.preventDefault();
        //validar formulario
        if(nombre.trim() === '' || precio <= 0){
            return;
        }
        // si no hay errores

        //crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        //redireccionar history viene de react router
        history.push('/');
    }

    return (  
        <div className="row justifi-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-wight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">  
                                <label>Nombre producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                />

                                <label>Precio producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e => setPrecio(Number(e.target.value))}
                                />

                                <button
                                    type="submit"
                                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4"
                                >
                                    Agregar Producto
                                </button>
                            </div>
                        </form>

                        {cargando ? <p>cargando...</p> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}

                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NuevoProducto;