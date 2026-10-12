import { useForm } from "react-hook-form";
import "../products/AdminProduct.css"
import "../../products/Products.css"
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import UsersRow from "../../../components/users-row/UsersRow";
import { NavLink } from "react-router";
import "./AdminUsers.css"

const URL_BASE = 'https://6aab23a5ea0e22daa6dbcf5b.mockapi.io'

export default function AdminUsers() {

    const nameInputRef = useRef(null); // Referencia para el input de nombre del producto

    const [users, setUsers] = useState([]);

    const [editingUsersId, setEditingUsersId] = useState(null);

    // Hook de formularios
    const { register, handleSubmit, setValue, reset, trigger, formState: { errors, isValid } } = useForm({ mode: "onChange" });

    useEffect(() => {

        obtenerUsuarios();
    }, [])

    // Obtener productos desde el backend
    async function obtenerUsuarios() {

        // Realizar una llamada al servidor para obtener los productos
        const response = await axios.get(`${URL_BASE}/users`)
        // Una vez obtenidos, actualizar el estado de los productos a través de su función para actualizar setProducts.
        const usuariosObtenidos = response.data

        setUsers(usuariosObtenidos)
    }



    //Parcialmente terminado: 
    // ✅ Crear producto y guardar funcionando
    //❌ Actualizar producto
    async function envioFormulario(users) {
        try {

            const data = users;

            if (editingUsersId) {
                //Significa que estamos editando un producto 
                await axios.put(`${URL_BASE}/users/${editingUsersId}`, users)

                Swal.fire({
                    title: "Usuario acatualiado",
                    text: `El usuario ${users.name} ha sido actualizado exitosamente`,
                    icon: "success"

                })

            } else {
                users.createdAt = new Date().toISOString()
                await axios.post(`${URL_BASE}/users`, users)

                Swal.fire({
                    title: "Usuario creadoi correctamente",
                    text: `El usuario ${users.name} fue creado exitosamente`,
                    icon: "success"

                })
                //Si no tengo valor de editingProductId, significa que estamos creando un nuevo producto
            }

            setEditingUsersId(null); // reiniciar el estado de edicion despues de enviar el formulario.
            reset();

            //Hacer foco nuevamente en el primer campo del formulario despues de enviarlo, 
            //codigo full JS
            // document.querySelector('input[name="name"]').focus();

            //react:

            nameInputRef?.current?.focus();

            obtenerUsuarios()


        } catch (error) {

            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al cargar el producto"
            })
        }
    }


    async function handleDelete(id) {

        try {
            const result = await Swal.fire({
                icon: "warning",
                title: "Estas seguro?",
                text: "No podras revertir esto.",
                showCancelButton: true,
                confirmButtonText: "Si, Eliminar",
                cancelButtonText: "Cancelar"
            })

            if (!result.isConfirmed) {
                return;

            }

            await axios.delete(`${URL_BASE}/users/${id}`);
            Swal.fire({
                title: "Usuario Elimidado",
                text: `El usuario con id ${id} fue eliminado exitosamente `,
                icon: "success"

            });
            //vuelvo a pedir productos luego de eliminar uno 
            obtenerUsuarios()

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al eliminar el usuario."
            })

        }
    }

    function handleEdit(id) {
        //Cuando obtengamos el Id del producto a editar, vamos a rellenar el formulario con los daatos existentes del producto elegido para  su edicion. 
        //Usaremos el id para buscar el producto correspondiente y rellenar el formulario con sus datos con el metodo find.

        const userEdit = users.find(users => users.id === id)

        if (userEdit) {
            setValue("avatar", userEdit.avatar)
            setValue("name", userEdit.name)
            setValue("lastName", userEdit.lastName)
            setValue("email", userEdit.email)
            setValue("role", userEdit.role)
            setValue("address", userEdit.address)
            setValue("zipCode", userEdit.zipCode)
            setValue("password", userEdit.password)

            trigger()
            // voy a guardar el id del producto que se esta editando en el estado 
            setEditingUsersId(userEdit.id)
        }
    }

    return (
        <>
            <div className="adminEdit">
                <h1>Administrar</h1>
                <ul>
                    <li className="nav-item">
                        <NavLink to="/admin/users" className="nav-link">
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/products" className="nav-link">Admin Products</NavLink>
                    </li>

                </ul>
            </div>
            <div className="admin-container">
                <div className="form-container">

                    <form className="contact-form  registro-form" onSubmit={handleSubmit(envioFormulario)} noValidate>
                        <div>
                            <h2>Agregar Nuevo Usuario</h2>
                        </div>
                        <label htmlFor="avatar">Cargue un Avatar</label>
                        <br />
                        <input

                            type="url"
                            {...register("avatar", {
                                required: "La URL de la imagen es obligatoria", pattern: {
                                    value: /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/, message: "Ingrese una URL válida de imagen"
                                }
                            })}
                            id="avatar"


                        />
                        {errors?.avatar && <p className="error">{errors.avatar.message}</p>}
                        <br />
                        <label htmlFor="name">Nombre </label>
                        <br />
                        <input

                            type="text"
                            ref={nameInputRef} // Asignar la referencia al input de nombre
                            id="name"
                            {...register("name", { required: "El nombre del producto es obligatorio", minLength: { value: 2, message: "El nombre del usuario debe tener al menos 2 caracteres" }, maxLength: { value: 50, message: "El nombre del usuario no puede exceder los 50 caracteres" } }

                            )}

                        />
                        {errors?.name && <p className="error">{errors.name.message}</p>}

                        <br />
                        <label htmlFor="lastName">Apellido </label>
                        <br />
                        <input

                            type="text"


                            {...register("lastName", { required: "El apellido del usuario es obligatorio", minLength: { value: 3, message: "El apellido del usuario debe tener al menos 3 caracteres" }, maxLength: { value: 50, message: "El apellido del usuario no puede exceder los 50 caracteres" } }

                            )}

                        />
                        {errors?.lastName && <p className="error">{errors.lastName.message}</p>}
                        <br />
                        <label htmlFor="email">Correo</label>
                        <br />
                        <input

                            type="text"
                            id="email"
                            {...register("email", {
                                required: " El correo electronico es obligatorio", pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Ingresa un correo electrónico válido"
                                }
                            })}


                        />
                        {errors?.email && <p className="error">{errors.email.message}</p>}
                        <br />
                        <label htmlFor="role">Role</label><br></br>
                        <select  {...register("role",)}
                            id="role"
                        >


                            <option value="">Seleccione un Rol</option>
                            <option value="Admin">Admin</option>
                            <option value="It">IT</option>
                            <option value="Payroll">Finanzas</option>
                            <option value="Estudiante">Pasante</option>
                            <option value="Invitado">Invitado</option>

                        </select>
                        <br />
                        <label htmlFor="address">País </label>
                        <br />
                        <input

                            type="text"


                            {...register("address", {
                                required: "La direccion es necesaria", minLength: {
                                    value: 5,
                                    message: "La dirección debe tener al menos 5 caracteres"
                                },
                                maxLength: {
                                    value: 100,
                                    message: "La dirección no puede exceder los 100 caracteres"
                                }
                            }

                            )}

                        />
                        {errors?.address && <p className="error">{errors.address.message}</p>}

                        <br />

                        <label htmlFor="zipCode">Zip Code</label>
                        <br />
                        <input

                            type="text"
                            id="zipCode"
                            {...register("zipCode", {
                                required: "El codigo postal es obligatorio", pattern: {
                                    value: /^[a-zA-Z0-9\s-]{3,10}$/,
                                    message: "Ingresa un código postal válido"
                                }
                            })}
                        />
                        {errors?.zipCode && <p className="error">{errors.zipCode.message}</p>}
                        <br />
                        <label htmlFor="password">Contraseña</label>
                        <br />
                        <input

                            type="password"
                            id="password"
                            {...register("password", {
                                required: "La contraseña es obligatoria",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.\-_])[A-Za-z\d@$!%*?&.\-_]{8,}$/,
                                    message: "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
                                }
                            })}
                        />
                        {errors?.password && <p className="error">{errors.password.message}</p>}
                        <br />
                        <br />
                        <div className="button-container">
                            <button disabled={!isValid} type="submit" className={`button-contact ${editingUsersId ? "edit-button" : " "} `} >
                                {editingUsersId ? "Actualizar Usuario" : "Agregar Usuario"}
                            </button>

                            {editingUsersId && (
                                <button type="button" onClick={() => {
                                    setEditingUsersId(null);
                                    reset();  
                                }} className="cancel-button">

                                    <FontAwesomeIcon icon={faX} />

                                </button>
                            )}
                        </div>
                    </form>


                </div>


                <section>
                    <div className="table-title">
                        <h1>Administrador de Usuarios</h1>
                    </div>
                    <div className="adm-prod">
                        <table className="adm-table">
                            <thead>
                                <tr>
                                    <th>Avatar</th>
                                    <th>Nombre</th>
                                    <th >Apellido</th>
                                    <th>Correo</th>
                                    <th>Rol</th>
                                    <th>País</th>
                                    <th>Fecha de creación</th>
                                    <th>Zip Code</th>
                                    <th>Agregar o eliminar</th>
                                </tr>
                            </thead>
                            <tbody>


                                {

                                    //se puede usar tambien si en el return   products.map((producto) =><ProductRow key={producto.id} prod={producto} />)
                                    users.map((users) => {

                                        return <UsersRow key={users.id}
                                            users={users}
                                            handleEdit={handleEdit}
                                            handleDelete={handleDelete} />
                                    })


                                }



                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </>
    )
}
