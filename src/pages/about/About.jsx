import { Link, NavLink } from 'react-router'
import './About.css'

export default function About() {


  return (

    <>
      <div className="about-title">
        <h2>Acerca del proyecto </h2>
        <p>
          Nexus Forge Gaming es una plataforma web desarrollada como una solución
          moderna y de alto rendimiento para el comercio de hardware y periféricos
          premium. El proyecto nace con el objetivo de fusionar una interfaz de
          usuario impecable, limpia y minimalista con la potencia visual que la
          comunidad gamer exige. Cada sección, desde el catálogo interactivo hasta
          los flujos de compra, ha sido optimizada para ofrecer una experiencia de
          navegación fluida, rápida y segura, permitiendo a los entusiastas de la
          tecnología encontrar el arsenal perfecto para sus estaciones de batalla.
        </p>
      </div>
      <section className="hero-about">
        <div className="eslogan">
          <p>"Ingeniería optimizada para el jugador del mañana."</p>
        </div>
        <div className="about-flex-container">
          <div className="hero-abt">
            <div>
              <h2>Conoce al Fundador / CEO</h2>
            </div>
            <p>
              Soy el fundador y la mente detrás de Nexus Forge Gaming. Este proyecto
              no nació en una oficina corporativa, sino directamente desde mi propio
              escritorio de juego, rodeado de cables, componentes y la obsesión por
              armar la PC perfecta.
            </p>
            <p>
              Como gamer y entusiasta de la tecnología, me cansé de las tiendas
              frías que solo ven números. Por eso decidí fundar este espacio: para
              crear una comunidad donde cada tarjeta gráfica, gabinete o periférico
              esté seleccionado bajo el estándar de alguien que realmente los usa y
              los exige al máximo. Diseñé y desarrollé esta plataforma desde cero
              para asegurar que tu experiencia de compra sea tan fluida, limpia y
              premium como el rendimiento que buscas en tus juegos. Mi compromiso
              contigo es simple: no te vendo hardware que yo mismo no pondría en mi
              setup.
            </p>
            <p>
              Ademas de haber creado la pagina soy el encargado de administar los
              productos el cual lo vas a poder ver en el siguiente enlace <span>"<Link to="/admin/products" className="nav-link">Admin Products</Link>"</span>
            </p>
          </div>
          <div className="about-card">
            <div className="about-card-image">
              <img src="./src/assets/images/IMG_8930.jpg" alt="perfil" />
            </div>
            <div className="card-content-about">
              <h3>Carlos Ulate Vargas</h3>
              <p>
                E-mail: <a href="mailto:info@nexus.com">info@nexus.com</a>
              </p>
              <p>
                Teléfono: <a href="tel:+50685230740">+506 8523-0740</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
