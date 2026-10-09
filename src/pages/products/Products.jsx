import { faEye, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";




export default function Products() {
    return (
        <>
            <div className="prod-title">
                <h1>Productos</h1>
                <p>
                    Equipamiento de alta gama para jugadores exigentes. Encuentra los mejores
                    componentes y periféricos para forjar tu estación de batalla.
                </p>
            </div>
            <div className="product-layout">
                <input type="checkbox" name="" id="filtrar" />
                <label htmlFor="filtrar">Filtrar</label>
                <aside className="filter-bar">
                    <div className="marcas">
                        <h5>Marcas</h5>
                        <div className="check">
                            <input type="checkbox" id="asus" name="asus" defaultValue="Asus" />
                            <label htmlFor="asus">Asus</label>
                        </div>
                        <div className="check">
                            <input type="checkbox" id="msi" name="msi" defaultValue="Msi" />
                            <label htmlFor="msi">Msi</label>
                        </div>
                        <div className="check">
                            <input type="checkbox" id="razer" name="razer" defaultValue="Razer" />
                            <label htmlFor="razer">Razer</label>
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                id="redragon"
                                name="redragon"
                                defaultValue="Redragon"
                            />
                            <label htmlFor="redragon">Redragon</label>
                        </div>
                        <div className="check">
                            <input type="checkbox" id="xyz" name="xyz" defaultValue="XYZ" />
                            <label htmlFor="xyz">XYZ</label>
                        </div>
                        <div className="check">
                            <input type="checkbox" id="adata" name="adata" defaultValue="Adata" />
                            <label htmlFor="adata">Adata</label>
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                id="samsung"
                                name="samsung"
                                defaultValue="Samsung"
                            />
                            <label htmlFor="samsung">Samsung</label>
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                id="logitech"
                                name="logitech"
                                defaultValue="Logitech"
                            />
                            <label htmlFor="logitech">Logitech</label>
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                id="darkflash"
                                name="darkflash"
                                defaultValue="Darkflash"
                            />
                            <label htmlFor="darkflash">Darkflash</label>
                        </div>
                    </div>
                    <br />
                    <div className="category">
                        <h5>Categoria</h5>
                        <div className="check">
                            <input
                                type="checkbox"
                                id="monitor"
                                name="monitor"
                                defaultValue="Monitor"
                            />
                            <label htmlFor="monitor">Monitor</label>
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                id="tarjeta grafica"
                                name="tarjeta grafica"
                                defaultValue="Tarjeta_grafica"
                            />
                            <label htmlFor="tarjeta grafica">Tarjeta grafica</label>
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                id="audifonos"
                                name="audifonos"
                                defaultValue="Audifonos"
                            />
                            <label htmlFor="audifonos">Audifonos</label>
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                id="teclado"
                                name="teclado"
                                defaultValue="Teclado"
                            />
                            <label htmlFor="teclado">Teclado</label>
                        </div>
                        <div className="check">
                            <input type="checkbox" id="case" name="case" defaultValue="Case" />
                            <label htmlFor="case">Case</label>
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                id="enfriamiento"
                                name="enfriamiento"
                                defaultValue="Enfriamiento"
                            />
                            <label htmlFor="enfriamiento">Enfriamiento</label>
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                id="memoria ram"
                                name="memoria ram"
                                defaultValue="Memoria_Ram"
                            />
                            <label htmlFor="memoria ram">Memoria RAM</label>
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                id="camara"
                                name="camara"
                                defaultValue="Camaras"
                            />
                            <label htmlFor="camara">Camaras</label>
                        </div>
                        <br />
                        <div className="panel">
                            <h5>Tipo de Panel</h5>
                            <div className="check">
                                <input type="checkbox" id="ips" name="ips" defaultValue="IPS" />
                                <label htmlFor="ips">IPS</label>
                            </div>
                            <div className="check">
                                <input type="checkbox" id="oled" name="oled" defaultValue="OLED" />
                                <label htmlFor="oled">OLED</label>
                            </div>
                            <div className="check">
                                <input type="checkbox" id="va" name="va" defaultValue="VA" />
                                <label htmlFor="va">VA</label>
                            </div>
                        </div>
                        <br />
                        <div className="teclado">
                            <h5>Tipo de Teclado</h5>
                            <div className="check">
                                <input
                                    type="checkbox"
                                    id="mecanico"
                                    name="mecanico"
                                    defaultValue="Mecanico"
                                />
                                <label htmlFor="mecanico">Mecanico</label>
                            </div>
                            <div className="check">
                                <input
                                    type="checkbox"
                                    id="membrana"
                                    name="membrana"
                                    defaultValue="Membrana"
                                />
                                <label htmlFor="membrana">Membrana</label>
                            </div>
                        </div>
                    </div>
                </aside>
                <section className="product-section product">
                    <div className=" container">
                        <div className="card">
                            <div className="card-image">
                                <img
                                    src="./src/assets/images/products/nvidia_5070ti.jpg"
                                    alt="nvidia_5070ti"
                                />
                                <FontAwesomeIcon  className="star-icon" icon={faStar} />
                                <NavLink
                                    to="/products/productDetail"
                                    className="view-more-btn"
                                    aria-label="Ver más"
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                </NavLink>
                            </div>
                            <div className="card-content">
                                <h3>Tarjeta Grafica</h3>
                                <p>Asus Tuf GeForce 5070 TI 16GB Gaming</p>
                                <span className="price">$1000</span>
                                <button className="add-to-cart">Agregar al carrito</button>
                            </div>
                        </div> 
                    </div>
                </section>
            </div>
        </>

    )
}
