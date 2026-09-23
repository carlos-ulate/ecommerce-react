export default function Home() {
  return (
    <>
      <div className="title">
        <h1>
          <span className="prev">Nexus For</span>
          <span className="after">ge Gaming</span>
        </h1>
      </div>
      <section className="hero-carousel">
        <div id="head-carousel" className="carousel-slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./src/assets/images/nvidia-graphic.webp"
                className="d-block w-100"
                alt="nvidia_graphic"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/amd.avif"
                className="d-block w-100"
                alt="amd_products"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/HyperX.jpg"
                className="d-block w-100"
                alt="hyperX_products"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/intel.jpg"
                className="d-block w-100"
                alt="intel"
              />
            </div>
            <div className="carousel-phrase">
              <h5>EQUIPA TU ARSENAL</h5>
              <p>
                Monitores de alta tasa de refresco, periféricos custom y el hardware
                que te mantendrá en la cima del marcador.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*video*/}
      <section className=" hero-video-section">
        <div className="hero-video">
          <video
            src="./src/assets/videos/blackmyth-banner.mp4"
            alt="banner_video"
            controls
            autoPlay
            mute
            loop
            playsInline
            width="100%"
          />
        </div>
      </section>
      <main>
        <section id="hero">
          <div className="hero-info">
            <h2>BIENVENIDO A LA NUEVA ERA GAMING </h2>
            <p>
              Bienvenidos a la forja del hardware definitivo. Diseñamos ecosistemas
              gaming a medida, desde PCs preensambladas capaces de exprimir cada
              frame, hasta componentes de vanguardia y modificaciones estéticas
              exclusivas.
            </p>
            <p>
              {" "}
              No solo vendemos tecnología, desatamos el verdadero potencial de tu
              setup.
            </p>
            <p>Cruza la frontera de los gráficos en Ultra.</p>
          </div>
          <div id="hero-img-container">
            <img
              className="hero-img"
              src="./src/assets/images/nexus_forge_gaming_banner.svg"
              alt="hero-img"
            />
          </div>
        </section>
        <section className="product-section">
          <div className="prod">
            <h2 className="section-title">Nuestros Productos</h2>
            <p className="section-text">
              El inventario de hardware está seleccionado específicamente para
              cubrir desde jugadores casuales hasta competidores profesionales:{" "}
            </p>
          </div>
          {/*div para la seccion de cards*/}
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
                <button className="add-to-cart">Agregar al carro</button>
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
                  <i className="fas fa-eye" />
                </button>
              </div>
              <div className="card-content">
                <h3>Tarjeta Grafica</h3>
                <p>MSI GeForce RTX 5050 8GB Gaming OC</p>
                <span className="price">$350</span>
                <button className="add-to-cart">Agregar al carro</button>
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
                <button className="add-to-cart">Agregar al carro</button>
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
                <button className="add-to-cart">Agregar al carro</button>
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
                <button className="add-to-cart">Agregar al carro</button>
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
                <button className="add-to-cart">Agregar al carro</button>
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
                <button className="add-to-cart">Agregar al carro</button>
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
                <button className="add-to-cart">Agregar al carro</button>
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
                <button className="add-to-cart">Agregar al carro</button>
              </div>
            </div>
          </div>
        </section>
        {/*seccion de servicios que ofrece la empresa*/}
        <section className="servicios">
          <div className="serv">
            <h2 className="serv-title">Nuestros Servicios</h2>
            <p>
              Nexus no es solo una tienda, tambien puedes encontrar servicios
              especializados y ofrece soluciones tecnicas avanzadas para llevar la
              experiencia de juego al maximo nivel:
            </p>
          </div>
          <div className="serv-container">
            <div className="serv">
              <i className="fa-solid fa-screwdriver-wrench" />
              <h3>Laboratorio de Modding y Personalización</h3>
              <p>
                Diseño estético a medida para computadoras, que incluye pintura
                personalizada, grabado láser, cableado trenzado de autor y diseño de
                sistemas de refrigeración líquida rígida (custom loops).
              </p>
              <button type="button" className="btn btn-info button-serv">
                Cotizar
              </button>
            </div>
            <div className="serv">
              <i className="fa-solid fa-desktop" />
              <h3>Optimización de Rendimiento Remota (FPS Boost)</h3>
              <p>
                Servicio técnico digital donde un especialista configura el sistema
                operativo del cliente, optimiza la BIOS, actualiza drivers y realiza
                overclocking seguro para maximizar los fotogramas por segundo en
                juegos competitivos.
              </p>
              <button type="button" className="btn btn-info button-serv">
                Cotizar
              </button>
            </div>
            <div className="serv">
              <i className="fa-solid fa-wrench" />
              <h3>Mantenimiento Físico y Diagnóstico</h3>
              <p>
                Servicio de limpieza profunda de componentes, eliminación de polvo,
                cambio de almohadillas térmicas y aplicación de pasta térmica de
                metal líquido para reducir temperaturas.
              </p>
              <button type="button" className="btn btn-info button-serv">
                Cotizar
              </button>
            </div>
            <div className="serv">
              <i className="fa-solid fa-video" />
              <h3>Configuración y Asesoría para Streamers</h3>
              <p>
                Servicio de consultoría a domicilio o remota para calibrar software
                de transmisión (como OBS), configurar capturadoras de video,
                ecualizar el audio del micrófono y sincronizar la iluminación
                ambiental.
              </p>
              <button type="button" className="btn btn-info button-serv">
                Cotizar
              </button>
            </div>
            <div className="serv">
              <i className="fa-solid fa-star" />
              <h3> Suscripción "Nexus Elite"</h3>
              <p>
                Membresía premium que otorga a los clientes soporte técnico
                prioritario 24/7, mantenimiento anual gratuito y acceso exclusivo a
                preventas de hardware de stock limitado.
              </p>
              <button type="button" className="btn btn-info button-serv">
                Cotizar
              </button>
            </div>
          </div>
        </section>
      </main>
    </>

  )
}
