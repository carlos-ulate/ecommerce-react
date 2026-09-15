import React from 'react'

export default function Register() {
    return (
        <section className="registro">
            <div className="register-body">
                <h1>Registro</h1>
                <p>
                    Si desea formar parte de nuestro equipo o registrar una nueva cuenta, por
                    favor complete el formulario a continuación.
                </p>
            </div>
            <div className="register-form">
                <form className="contact-form  registro-form" method="post">
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
                    <label htmlFor="contrasena">Contraseña</label>
                    <br />
                    <input
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        requeried=""
                        minLength={10}
                        placeholder="**********"
                    />
                    <br />
                    <label htmlFor="contrasena">Confirmar Contraseña</label>
                    <br />
                    <input
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        requeried=""
                        minLength={10}
                        placeholder="**********"
                    />
                    <br />
                    <label htmlFor="fecha">Fecha de Nacimiento</label>
                    <br />
                    <input type="date" id="fecha" name="fecha" required="" />
                    <br />
                    <label htmlFor="pais">Elija un pais</label>
                    <br />
                    <select name="pais" id="pais" required="">
                        <option value="costa-rica">Costa Rica</option>
                        <option value="argentina">Argentina</option>
                        <option value="estados-unidos">Estados Unidos</option>
                        <option value="noruega">Noruega</option>
                        <option value="espana">España</option>
                        <option value="portugal">Portugal</option>
                    </select>
                    <br />
                    <br />
                    <button type="submit" className="button-contact">
                        Enviar
                    </button>
                </form>
            </div>
        </section>

    )
}
