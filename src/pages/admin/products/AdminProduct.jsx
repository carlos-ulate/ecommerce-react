import "./AdminProduct.css"

export default function AdminProduct() {

    function handleSubmit(event) {

        event.preventDefault();

        const el = event.target.elements;

        console.log(el.price.value);
        console.log(el.name.value)


    }



    return (

        <div className="admin-container">
            <div className="form-container">
                <form>
                    <form className="contact-form  registro-form" method="post">
                        <label htmlFor="nombre">Nombre del Producto</label>
                        <br />
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            required=""

                        />
                        <br />
                        <label htmlFor="apellido">Descripcion del Producto</label>
                        <br />
                        <input
                            type="text"
                            id="descripcion"
                            name="descripcion"
                            required=""

                        />
                        <br />
                        <label htmlFor="precio">Precio</label>
                        <br />
                        <input
                            type="number"
                            id="precio"
                            name="precio"
                            required=""

                        />
                        <br />
                        <label htmlFor="fecha">Fecha de Ingreso</label>
                        <br />
                        <input
                            type="date"
                            id="fecha"
                            name="fecha"
                            requeried=""


                        />
                        <br />
                        <label htmlFor="files">Seleccionar Producto</label>
                        <br />
                        <input
                            type="file"
                            id="files"
                            name="files"
                            requeried=""

                        />
                        <br />
                        <label htmlFor="stock">Stock:</label>
                        <br />
                        <input type="number" id="stock" name="stock" required="" />
                        <br />

                        <br />
                        <br />
                        <button type="submit" className="button-contact">
                            Agregar Producto
                        </button>
                    </form>



                </form>


            </div>


            <section>
                <div className="table-title">
                    <h1>Administrador de Productos</h1>
                </div>
                <div className="adm-prod">
                    <table className="adm-table">
                        <tbody>
                            <tr>
                                <th>Foto</th>
                                <th>Nombre</th>
                                <th>Fecha de Ingreso</th>
                                <th>Precio</th>
                                <th>Agregar o eliminar</th>
                            </tr>
                            <tr>
                                <td>
                                    <img src="./src/assets/images/products/case.webp" alt="case" />
                                </td>
                                <td>XYZ Aurorax 50 Negro XYZ-SA-1020</td>
                                <td> 6/8/2026</td>
                                <td>$60</td>
                                <td>
                                    <button className="btn btn-success">
                                        <i className="fa-solid fa-pen" />
                                    </button>
                                    <button className="btn btn-danger">
                                        <i className="fa-solid fa-trash-can" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="./src/assets/images/products/enfriamiento.jpg"
                                        alt="enfriamiento"
                                    />
                                </td>
                                <td>Darkflash Nebula Series DN3600D</td>
                                <td>6/8/2026</td>
                                <td>$80</td>
                                <td>
                                    <button className="btn btn-success">
                                        <i className="fa-solid fa-pen" />
                                    </button>
                                    <button className="btn btn-danger">
                                        <i className="fa-solid fa-trash-can" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="/assets/images/products/logitech_camara.jpg"
                                        alt="camara"
                                    />
                                </td>
                                <td>Logitech MX Brio</td>
                                <td>6/8/2026</td>
                                <td>$169.99</td>
                                <td>
                                    <button className="btn btn-success">
                                        <i className="fa-solid fa-pen" />
                                    </button>
                                    <button className="btn btn-danger">
                                        <i className="fa-solid fa-trash-can" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/images/products/MSI _5050.webp" alt="msi_5050" />
                                </td>
                                <td>MSI GeForce RTX 5050 8GB Gaming OC</td>
                                <td>6/8/2026</td>
                                <td>$350</td>
                                <td>
                                    <button className="btn btn-success">
                                        <i className="fa-solid fa-pen" />
                                    </button>
                                    <button className="btn btn-danger">
                                        <i className="fa-solid fa-trash-can" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="/assets/images/products/nvidia_5070ti.jpg"
                                        alt="asus_5070ti"
                                    />
                                </td>
                                <td>Asus Tuf GeForce 5070 TI 16GB Gaming</td>
                                <td>6/8/2026</td>
                                <td>$1000</td>
                                <td>
                                    <button className="btn btn-success">
                                        <i className="fa-solid fa-pen" />
                                    </button>
                                    <button className="btn btn-danger">
                                        <i className="fa-solid fa-trash-can" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/images/products/ram.webp" alt="ram" />
                                </td>
                                <td>Adata XPG Armax RGB 16GB DDR5 5600</td>
                                <td>6/8/2026</td>
                                <td>$75</td>
                                <td>
                                    <button className="btn btn-success">
                                        <i className="fa-solid fa-pen" />
                                    </button>
                                    <button className="btn btn-danger">
                                        <i className="fa-solid fa-trash-can" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="/assets/images/products/redragon_keyboard.jpg"
                                        alt="teclado"
                                    />
                                </td>
                                <td>Redragon K552W Kumara RGB</td>
                                <td>6/8/2026</td>
                                <td>$35</td>
                                <td>
                                    <button className="btn btn-success">
                                        <i className="fa-solid fa-pen" />
                                    </button>
                                    <button className="btn btn-danger">
                                        <i className="fa-solid fa-trash-can" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/images/products/samsung_oled.jpg" alt="monitor" />
                                </td>
                                <td>Samsung Odyssey G8 27″ Oled 4k 240Hz</td>
                                <td>6/8/2026</td>
                                <td>$1299.99</td>
                                <td>
                                    <button className="btn btn-success">
                                        <i className="fa-solid fa-pen" />
                                    </button>
                                    <button className="btn btn-danger">
                                        <i className="fa-solid fa-trash-can" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="/assets/images/products/razer_headset.avif"
                                        alt="audifonos"
                                    />
                                </td>
                                <td>Razer BlackShark V3 Pro Wireless ANC Blanco</td>
                                <td>6/8/2026</td>
                                <td>$230</td>
                                <td>
                                    <button className="btn btn-success">
                                        <i className="fa-solid fa-pen" />
                                    </button>
                                    <button className="btn btn-danger">
                                        <i className="fa-solid fa-trash-can" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}
