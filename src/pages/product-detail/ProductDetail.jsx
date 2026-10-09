import { useParams } from "react-router"
import "./ProductDetail.css"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getProductById } from "../../services/product.services";

export default function ProductDetail() {

    const [product, setProduct] = useState()

    //const { id } = useParams () // { id: valor} manera que normalmente se utiliza 
    const params = useParams()
    const id = params.id;

    useEffect(() => {
        obtenerElProducto()
    }, [])

    async function obtenerElProducto() {
        try {
            const product = await getProductById(id)
            setProduct(product)

        } catch (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al cargar el producto"
            })

        }
    }

    return (
        <section className="detalles">
            <div className="det-img">
                <img
                    width="500"

                    src={product?.image}
                    alt={product?.name} />
                <p>${product?.price}</p>
                <button className="add-to-cart">Agregar al carrito</button>
            </div>
            <div>
                <h2>{product?.name} </h2>
                <h6>{product?.category ? product.category.charAt(0).toUpperCase() + product.category.slice(1) : ''}</h6>
                <ul>{product?.description?.split('\n').filter(line => line.trim() !== '').map((line, index) => {
                    {
                        const isTitle = !line.includes(':');

                        if (isTitle) {
                            return <p className="desc-title"  key={index}><strong>{line}</strong></p>
                        }



                    }


                    return (<li key={index}>{line}</li>);
                }

                )}</ul>
            </div>
        </section>

    )
}
