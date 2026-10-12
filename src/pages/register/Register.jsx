
import { useNavigate } from "react-router"
import Swal from "sweetalert2"
import { createUser } from "../../services/users.services"
import { useForm } from "react-hook-form"
import "./Register.css"


const PAISES = {
    "costa-rica": "Costa Rica",
    "argentina": "Argentina",
    "estados-unidos": "Estados Unidos",
    "noruega": "Noruega",
    "espana": "España",
    "portugal": "Portugal"

}

export default function Register() {

    const navigate = useNavigate();
    const { register, handleSubmit, getValues, formState: { errors, isValid, } } = useForm({ mode: "onChange", defaultValues: { country: "costa-rica" } })


    async function handleRegister(data) {

        try {
            await createUser({
                name: data.name,
                lastName: data.lastName,
                email: data.email,
                password: data.contrasena,
                role: "Invitado",
                avatar: `https://api.dicebear.com/9.x/initials/svg?seed=${data.name}`,
                address: PAISES[data.address] || data.address,

                zipCode: data.zipCode,
                createdAt: new Date().toISOString(),
            })

            Swal.fire({
                title: "Usuario Registrado",
                text: "Usuario creado correctamente",
                icon: "success"
            })

           

        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al crear el usuario",
                icon: "error"
            })


        }

    }



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
                <form className="contact-form  registro-form"
                    onSubmit={handleSubmit(handleRegister)}>
                    <label htmlFor="name">Nombre</label>
                    <br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Carlos"
                        {...register("name", {
                            required: "El nombre es obligatorio", minLength: { value: 2, message: "El nombre debe tener mas de 2 caracteres" }, maxLength: { value: 15, message: "El nombre no puede exceder los 15 caracteres" }
                        })}
                    />
                    {errors?.name && <p className="error">{errors.name.message} </p>}
                    <br />
                    <label htmlFor="lastName">Apellido</label>
                    <br />
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Ulate"
                        {...register("lastName", {
                            required: "El apellido es obligatorio", minLength: { value: 2, message: "El apellido debe tener mas de 3 caracteres " },
                            maxLength: { value: 15, message: "El apellido no puede tener mas de 15 caracteres" }
                        })}
                    />
                    {errors?.lastName && <p className="error">{errors.lastName.message}</p>}
                    <br />
                    <label htmlFor="email">Correo Electrónico</label>
                    <br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@nexforge.com"

                        {...register("email", {
                            required: "El correo es obligatorio",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Ingresa un correo electrónico válido"
                            }
                        })}

                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}

                    <br />
                    <label htmlFor="password">Contraseña</label>
                    <br />
                    <input
                        type="password"
                        id="password"
                        name="password"

                        placeholder="**********"
                        {...register("contrasena", {
                            required: "La contraseña es obligatoria",
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.\-_])[A-Za-z\d@$!%*?&.\-_]{6,}$/,
                                message: "Debe tener al menos 6 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
                            }

                        })}
                    />
                    {errors?.contrasena && <p className="error">{errors.contrasena.message}</p>}
                    <br />
                    <label htmlFor="confirmar">Confirmar Contraseña</label>
                    <br />
                    <input
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        placeholder="**********"
                        {...register("confirmar", {
                            required: "Debe confirmar la contraseña",
                            validate: (value) => value === getValues("contrasena") || "Las contraseñas no coinciden"
                        })}
                    />
                    {errors?.confirmar && <p className="error">{errors.confirmar.message}</p>}

                    <br />
                    <label htmlFor="fecha">Fecha de Nacimiento</label>
                    <br />
                    <input type="date" id="fecha" name="fecha" {...register("fecha")} />
                    {errors.fecha && <p className="error">{errors.fecha.message}</p>}
                    <br />
                    <label htmlFor="country">Elija un pais</label>
                    <br />
                    <select name="country" id="country" {...register("country")}>
                        <option value="costa-rica">Costa Rica</option>
                        <option value="argentina">Argentina</option>
                        <option value="estados-unidos">Estados Unidos</option>
                        <option value="noruega">Noruega</option>
                        <option value="espana">España</option>
                        <option value="portugal">Portugal</option>
                    </select>
                    <br />
                    <label htmlFor="zipCode">Zip Code</label>
                    <br />
                    <input

                        type="text"
                        id="zipCode"
                        placeholder="Ej: 10101"
                        {...register("zipCode", {
                            required: "El codigo postal es obligatorio", pattern: {
                                value: /^[a-zA-Z0-9\s-]{3,10}$/,
                                message: "Ingresa un código postal válido"
                            }
                        })}
                    />
                    {errors?.zipCode && <p className="error">{errors.zipCode.message}</p>}
                    <br />
                    <br />
                    <br />
                    <button disabled={!isValid} type="submit" className="button-contact">
                        Enviar
                    </button>
                </form>
            </div>
        </section>

    )
}
