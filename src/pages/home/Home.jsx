import { useNavigate } from "react-router";
import ProductContainer from "../../components/product-container/ProductContainer";

export default function Home() {
  const navigate = useNavigate();

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
            muted
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



          <ProductContainer />

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
              <button type="button" className="btn btn-info button-serv" onClick={() => navigate("/contact")}>
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
              <button type="button" className="btn btn-info button-serv" onClick={() => navigate("/contact")}>
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
              <button type="button" className="btn btn-info button-serv" onClick={() => navigate("/contact")}>
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
              <button type="button" className="btn btn-info button-serv" onClick={() => navigate("/contact")}>
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
              <button type="button" className="btn btn-info button-serv" onClick={() => navigate("/contact")}>
                Cotizar
              </button>
            </div>
          </div>
        </section>
      </main>
    </>

  )
}
