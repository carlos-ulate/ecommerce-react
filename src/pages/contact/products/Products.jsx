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
                                    src="/assets/images/products/nvidia_5070ti.jpg"
                                    alt="nvidia_5070ti"
                                />
                                <i className="bx bx-star" />
                                <a
                                    href="/pages/product-detail.html"
                                    className="view-more-btn"
                                    aria-label="Ver más"
                                >
                                    <i className="fas fa-eye" />
                                </a>
                            </div>
                            <div className="card-content">
                                <h3>Tarjeta Grafica</h3>
                                <p>Asus Tuf GeForce 5070 TI 16GB Gaming</p>
                                <span className="price">$1000</span>
                                <button className="add-to-cart">Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img
                                    src="/assets/images/products/MSI _5050.webp"
                                    alt="nvidia_5050"
                                />
                                <i className="bx bx-star" />
                                <button className="view-more-btn" aria-label="Ver más">
                                    <i className="fas fa-eye"> </i>
                                </button>
                            </div>
                            <div className="card-content">
                                <h3>Tarjeta Grafica</h3>
                                <p>MSI GeForce RTX 5050 8GB Gaming OC</p>
                                <span className="price">$350</span>
                                <button className="add-to-cart">Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img
                                    src="/assets/images/products/razer_headset.avif"
                                    alt="razer_headset"
                                />
                                <i className="bx bx-star" />
                                <button className="view-more-btn" aria-label="Ver más">
                                    <i className="fas fa-eye" />
                                </button>
                            </div>
                            <div className="card-content">
                                <h3>Audifonos</h3>
                                <p>Razer BlackShark V3 Pro Wireless ANC Blanco</p>
                                <span className="price">$230</span>
                                <button className="add-to-cart">Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img
                                    src="/assets/images/products/redragon_keyboard.jpg"
                                    alt="redragon_keyboard"
                                />
                                <i className="bx bx-star" />
                                <button className="view-more-btn" aria-label="Ver más">
                                    <i className="fas fa-eye" />
                                </button>
                            </div>
                            <div className="card-content">
                                <h3>Perifericos</h3>
                                <p>Redragon K552W Kumara RGB</p>
                                <span className="price">$35</span>
                                <button className="add-to-cart">Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img src="/assets/images/products/case.webp" alt="case" />
                                <i className="bx bx-star" />
                                <button className="view-more-btn" aria-label="Ver más">
                                    <i className="fas fa-eye" />
                                </button>
                            </div>
                            <div className="card-content">
                                <h3>Case</h3>
                                <p>XYZ Aurorax 50 Negro XYZ-SA-1020</p>
                                <span className="price">$60</span>
                                <button className="add-to-cart">Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img
                                    src="/assets/images/products/enfriamiento.jpg"
                                    alt="enfriamiento_liquido"
                                />
                                <i className="bx bx-star" />
                                <button className="view-more-btn" aria-label="Ver más">
                                    <i className="fas fa-eye" />
                                </button>
                            </div>
                            <div className="card-content">
                                <h3>Enfriamiento Liquido</h3>
                                <p>Darkflash Nebula Series DN3600D</p>
                                <span className="price">$80</span>
                                <button className="add-to-cart">Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img src="/assets/images/products/ram.webp" alt="memoria_ram" />
                                <i className="bx bx-star" />
                                <button className="view-more-btn" aria-label="Ver más">
                                    <i className="fas fa-eye" />
                                </button>
                            </div>
                            <div className="card-content">
                                <h3>Memoria RAM</h3>
                                <p>Adata XPG Armax RGB 16GB DDR5 5600</p>
                                <span className="price">$75</span>
                                <button className="add-to-cart">Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img
                                    src="/assets/images/products/samsung_oled.jpg"
                                    alt="samsung_monitor"
                                />
                                <i className="bx bx-star" />
                                <button className="view-more-btn" aria-label="Ver más">
                                    <i className="fas fa-eye" />
                                </button>
                            </div>
                            <div className="card-content">
                                <h3>Monitores</h3>
                                <p>Samsung Odyssey G8 27″ Oled 4k 240Hz</p>
                                <span className="price">$1299.99</span>
                                <button className="add-to-cart">Agregar al carrito</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img
                                    src="/assets/images/products/logitech_camara.jpg"
                                    alt="camara_logitech"
                                />
                                <i className="bx bx-star" />
                                <button className="view-more-btn" aria-label="Ver más">
                                    <i className="fas fa-eye" />
                                </button>
                            </div>
                            <div className="card-content">
                                <h3>Webcam</h3>
                                <p>Logitech MX Brio </p>
                                <span className="price">$169.99</span>
                                <button className="add-to-cart">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}
