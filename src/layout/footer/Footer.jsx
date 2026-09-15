import "./Footer.css"
import FooterLogo from "../../assets/images/nexus_nav_log.png"

export default function Footer() {
  return (
    <footer>
      <section id="contacto">
        <div className="contact-footer">
          <h2>Contacto</h2>
          <p>Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.</p>
          <p>
            E-mail: <a href="mailto:info@nexus.com">info@nexus.com</a>
          </p>
          <p>
            Teléfono: <a href="tel:+50685230740">+506 8523-0740</a>
          </p>
          <p>Dirección: Avenida 4, Venecia, Alajuela, Costa Rica</p>
        </div>
      </section>
      <section id="social">
        <div className="social-media">
          <h2>Redes Sociales</h2>
          <p>
            Síguenos en nuestras redes sociales para estar al tanto de las últimas
            novedades, promociones y eventos:
          </p>
          <a href="https://www.facebook.com/nexusforgegaming" target="_blank">
            <i className="fab fa-facebook  social-icon" />
            <span className="social-text">Facebook</span>
          </a>
          <a href="https://www.twitter.com/nexusforgegaming" target="_blank">
            <i className="fab fa-twitter social-icon" />
            <span className="social-text">Twitter</span>
          </a>
          <a href="https://www.instagram.com/nexusforgegaming" target="_blank">
            <i className="fab fa-instagram social-icon" />
            <span className="social-text">Instagram</span>
          </a>
          <a href="https://www.youtube.com/nexusforgegaming" target="_blank">
            <i className="fab fa-youtube social-icon" />
            <span className="social-text">YouTube</span>
          </a>
        </div>
      </section>
      <section id="copyright">
        <div className="derechos">
          <img
            className="logo-footer"
            src={FooterLogo}
            alt="logo_footer"
          />
          <p>© 2024 Nexus Forge Gaming. Todos los derechos reservados.</p>
        </div>
      </section>
    </footer>

  )
}
