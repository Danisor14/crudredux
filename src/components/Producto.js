import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import borrarProductoAction from '../actions/eliminarAction';
import Swal from 'sweetalert2';

const Producto = ({producto}) => {
    const {nombre, precio, id} = producto;

    const dispatch = useDispatch();

    //confirmar si dsea eliminar
    const confirmarEliminarProducto = id => {
        //preguntar al usuario sweetalert
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(borrarProductoAction(id));
            }
          })   
    }


    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">${precio}</span></td>
            <td className="acciones">
                <Link 
                    to={`/productos/editar/${id}`}
                    className="btn btn-primary mr-2"
                >Editar</Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}
 
export default Producto;