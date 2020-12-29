import React from 'react';

const EditarProducto = () => {
    return (  
        <div className="row justifi-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-wight-bold">
                        Editar Producto
                    </h2>

                    <form>
                        <div className="form-group">  
                            <label>Nombre producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre producto"
                                name="nombre"
                            />

                            <label>Precio producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Precio producto"
                                name="precio"
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