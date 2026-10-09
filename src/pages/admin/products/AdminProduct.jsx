import { useForm } from "react-hook-form";
import "./AdminProduct.css"
import "../../products/Products.css"
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import ProductRow from "../../../components/product-row/ProductRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const URL_BASE = 'https://6aab23a5ea0e22daa6dbcf5b.mockapi.io'

export default function AdminProduct() {

    const nameInputRef = useRef(null); // Referencia para el input de nombre del producto

    const [products, setProducts] = useState([]);

    const [editingProductId, setEditingProductId] = useState(null);

    // Hook de formularios
    const { register, handleSubmit, setValue, reset, trigger, formState: { errors, isValid } } = useForm({ mode: "onChange" });

    useEffect(() => {

        obtenerProductos();
    }, [])

    // Obtener productos desde el backend
    async function obtenerProductos() {

        // Realizar una llamada al servidor para obtener los productos
        const response = await axios.get(`${URL_BASE}/products`)
        // Una vez obtenidos, actualizar el estado de los productos a través de su función para actualizar setProducts.
        const productosObtenidos = response.data

        setProducts(productosObtenidos)
    }



    //Parcialmente terminado: 
    // ✅ Crear producto y guardar funcionando
    //❌ Actualizar producto
    async function envioFormulario(data) {
        try {

            const product = data;

            if (editingProductId) {
                //Significa que estamos editando un producto 
                await axios.put(`${URL_BASE}/products/${editingProductId}`, product)

                Swal.fire({
                    title: "Producto acatualiado",
                    text: `El producto ${product.name} ha sido actualizado exitosamente`,
                    icon: "success"

                })

            } else {
                product.createdAt = new Date().toISOString()
                await axios.post(`${URL_BASE}/products`, product)

                Swal.fire({
                    title: "Producto Creado",
                    text: `El producto ${product.name} fue creado exitosamente`,
                    icon: "success"

                })
                //Si no tengo valor de editingProductId, significa que estamos creando un nuevo producto
            }

            setEditingProductId(null); // reiniciar el estado de edicion despues de enviar el formulario.
            reset();

            //Hacer foco nuevamente en el primer campo del formulario despues de enviarlo, 
            //codigo full JS
            // document.querySelector('input[name="name"]').focus();

            //react:

            nameInputRef?.current?.focus();

            obtenerProductos()


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

            await axios.delete(`${URL_BASE}/products/${id}`);
            Swal.fire({
                title: "Producto Elimidado",
                text: `El producto con id ${id} fue eliminado exitosamente `,
                icon: "success"

            });
            //vuelvo a pedir productos luego de eliminar uno 
            obtenerProductos()

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al eliminar el producto."
            })

        }
    }

    function handleEdit(id) {
        //Cuando obtengamos el Id del producto a editar, vamos a rellenar el formulario con los daatos existentes del producto elegido para  su edicion. 
        //Usaremos el id para buscar el producto correspondiente y rellenar el formulario con sus datos con el metodo find.

        const productoEditar = products.find(producto => producto.id === id)

        if (productoEditar) {
            setValue("image", productoEditar.image)
            setValue("name", productoEditar.name)
            setValue("description", productoEditar.description)
            setValue("category", productoEditar.category)
            setValue("price", productoEditar.price)
            // setValue("id", productoEditar.id)
            setValue("stock", productoEditar.stock)
            trigger()
            // voy a guardar el id del producto que se esta editando en el estado 
            setEditingProductId(productoEditar.id)
        }
    }

    return (

        <div className="admin-container">
            <div className="form-container">

                <form className="contact-form  registro-form" onSubmit={handleSubmit(envioFormulario)} noValidate>
                    <div>
                        <h2>Agregar Nuevo Producto</h2>
                    </div>
                    <label htmlFor="name">Nombre del Producto</label>
                    <br />
                    <input

                        type="text"
                        ref={nameInputRef} // Asignar la referencia al input de nombre
                        id="name"
                        {...register("name", { required: "El nombre del producto es obligatorio", minLength: { value: 3, message: "El nombre del producto debe tener al menos 3 caracteres" }, maxLength: { value: 50, message: "El nombre del producto no puede exceder los 50 caracteres" } }

                        )}

                    />
                    {errors?.name && <p className="error">{errors.name.message}</p>}

                    <br />
                    <label htmlFor="description">Descripcion del Producto</label>
                    <br />
                    <textarea id="description" 

                        {...register("description", { minLength: { value: 10, message: "La descripción del producto debe tener al menos 10 caracteres" }, maxLength: { value: 1000, message: "La descripción del producto no puede exceder los 1000 caracteres" } })}


                    />
                    {errors?.description && <p className="error">{errors.description.message}</p>}
                    <br />
                    <label htmlFor="price">Precio</label>
                    <br />
                    <input

                        type="number"
                        id="price"
                        {...register("price", { valueAsNumber: true, requiered: " Indique el precio del Producto", min: { value: 0, message: "El precio del producto debe ser mayor a $0" } })}


                    />
                    {errors?.price && <p className="error">{errors.price.message}</p>}
                    <br />
                    <label htmlFor="desc">Categoria</label><br></br>
                    <select  {...register("category",)}
                        id=""
                    >


                        <option value="">Selecciona una categoria</option>
                        <option value="periferico">Headset</option>
                        <option value="camara">Camara</option>
                        <option value="periferico">Teclado</option>
                        <option value="monitor">Monitor</option>
                        <option value="grafica">Tarjeta Grafica</option>
                        <option value="periferico">Audifonos</option>
                        <option value="case">Case</option>
                        <option value="enfriamiento">Enfriamiento Liquido</option>
                        <option value="ram">Memoria RAM</option>
                    </select>

                    {/* {errors?.category && <p className="error">{errors.category.message}</p>} */}
                    <br></br>
                    {/* <label htmlFor="createdAt">Fecha de Ingreso</label>
                    <br />
                    <input

                        type="date"
                        id="createdAt"
                        {...register("createdAt" , {valueAsDate: true} )}
                        requeried=""

                    /> */}

                    <br />
                    <label htmlFor="image">Cargar Imagen/Producto</label>
                    <br />
                    <input

                        type="url"
                        {...register("image", { required: "La URL de la imagen es obligatoria", pattern: { value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i, message: "Ingrese una URL válida de imagen" } })}
                        id="image"


                    />
                    {errors?.image && <p className="error">{errors.image.message}</p>}
                    <br />
                    <label htmlFor="stock">Stock:</label>
                    <br />
                    <input

                        type="number"
                        id="stock"
                        {...register("stock", { valueAsNumber: true, required: "Indique el stock del producto", min: { value: 0, message: "El stock no puede ser negativo" } })}
                    />
                    {errors?.stock && <p className="error">{errors.stock.message}</p>}
                    <br />

                    <br />
                    <br />
                    <div className="button-container">
                        <button disabled={!isValid} type="submit" className={`button-contact ${editingProductId ? "edit-button" : " "} `} >
                            {editingProductId ? "Actualizar Producto" : "Agregar Producto"}
                        </button>

                        {editingProductId && (
                            <button onClick={() => setEditingProductId(null)} className="cancel-button">

                                <FontAwesomeIcon icon={faX} />

                            </button>
                        )}
                    </div>
                </form>


            </div>


            <section>
                <div className="table-title">
                    <h1>Administrador de Productos</h1>
                </div>
                <div className="adm-prod">
                    <table className="adm-table">
                        <thead>
                            <tr>
                                <th>Foto</th>
                                <th>Nombre</th>
                                <th >Descripcion</th>
                                <th>Fecha de Ingreso</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Agregar o eliminar</th>
                            </tr>
                        </thead>
                        <tbody>


                            {

                                //se puede usar tambien si en el return   products.map((producto) =><ProductRow key={producto.id} prod={producto} />)
                                products.map((producto) => {

                                    return <ProductRow key={producto.id}
                                        prod={producto}
                                        handleEdit={handleEdit}
                                        handleDelete={handleDelete} />
                                })


                            }



                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}
