import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {editarProductoAction} from '../actions/editarAction';
import {useHistory} from 'react-router-dom';

const EditarProducto = () => {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: ''
    });

    const history = useHistory();
    const dispatch = useDispatch();

    const productoeditar = useSelector(state => state.productos.productoEditar);

    useEffect(() => {
        setProducto(productoeditar);
    }, [productoeditar])

        //leer datos del formulario
    const onChangeInput = (e) => {
        setProducto({ 
            ...producto,
            [e.target.name]: e.target.value
        })
    }


    const {nombre, precio} = producto;
    

    const submitEditarProducto = (e) => {
        e.preventDefault();
        dispatch(editarProductoAction(producto));
        history.push('/');
    }

    return (  
        <div className="row justifi-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-wight-bold">
                        Editar Producto
                    </h2>

                    <form
                        onSubmit={submitEditarProducto}
                    >
                        <div className="form-group">  
                            <label>Nombre producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre producto"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeInput}
                            />

                            <label>Precio producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Precio producto"
                                name="precio"
                                value={precio}
                                onChange={onChangeInput}
                            />

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4"
                            >
                                Guardar Producto
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
);

}
 
export default EditarProducto;