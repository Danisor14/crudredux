import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import obtenerProductosAction from '../actions/descargaAction';
import Producto from './Producto';

const Productos = () => {
    const dispatch = useDispatch();
        
    useEffect(() => {
        //consultar api
        //const cargarProductos = () => dispatch(obtenerProductosAction());
        //cargarProductos();
        dispatch(obtenerProductosAction());
    }, [])

    // obtener el state
    const listaProductos = useSelector( state => state.productos.productos);
    const error = useSelector( state => (state.productos.error));
    const cargando = useSelector(state => (state.productos.loading))
    
    
    return (  
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>

            {error ? <p className="font-weight-bold alert alert-danger text-center">Hubo un error</p> : null}

            {cargando ? <p className="text-center">cargando...</p> : null}
            
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                
                {listaProductos.length === 0 ? <p>No hay Productos'</p>: (
                    <tbody>    
                        {listaProductos.map(producto => (
                            <Producto
                                key={producto.id}
                                producto={producto}
                            />
                        ))}
                    </tbody>    
                )} 
                
            </table>
        </Fragment>
    );
}
 
export default Productos;