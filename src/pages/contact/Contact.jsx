import "./Contact.css"

export default function Contact() {
  return (
    <main className="contact-body">

      <div className="contact-info">
        <form className="contact-form" method="post">
          <label htmlFor="nombre">Nombre</label>
          <br />
          <input
            type="text"
            id="nombre"
            name="nombre"
            required=""
            placeholder="Carlos"
          />
          <br />
          <label htmlFor="apellido">Apellido</label>
          <br />
          <input
            type="text"
            id="apellido"
            name="apellido"
            required=""
            placeholder="Ulate"
          />
          <br />
          <label htmlFor="email">Correo Electrónico</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            required=""
            placeholder="example@nexforge.com"
            minLength={15}
            maxLength={30}
          />
          <br />
          <label htmlFor="mensaje">Mensaje</label>
          <br />
          <textarea
            id="mensaje"
            name="mensaje"
            required=""
            placeholder="Escribe tu mensaje aquí..."
            rows={10}
            minLength={20}
            maxLength={1000}
            defaultValue={""}
          />
          <br />
          <button type="submit" className="button-contact">
            Enviar
          </button>
        </form>
      </div>
      <section className="ubicacion">
        <div className="location">
          <h2>Ubicación</h2>
          <p>
            Visítanos en nuestra tienda física o contáctanos para más información.
          </p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15699.257204046966!2d-84.284781740591!3d10.356728444473847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0629b6d27dfe5%3A0x9ccf9829e48757c0!2sProvincia%20de%20Alajuela%2C%20Venecia!5e0!3m2!1ses!2scr!4v1789447486685!5m2!1ses!2scr"
            width={800}
            height={600}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />


        </div>
      </section>
    </main>

  )
}
