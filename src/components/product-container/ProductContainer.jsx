import { useEffect, useState } from "react"
import ProductCard from "../product-card/ProductCard"
import { getProducts } from "../../services/product.services"
import "./ProductContainer.css"

export default function ProductContainer() {


    //Debería tener un estado para cargar los productos
    //Toda la lógica que carga los productos debería ir aquí , inlcuyendo llamadas a APIs y manejo de estados.

    const  [products, setProducts] = useState([])

    useEffect(() => {
        obtenerProductos()
    }, [])

    async function obtenerProductos(){

        const productos = await getProducts()
        setProducts(productos)

    }


    return (
        <>
            <div className="prod">
                <h2 className="section-title">Nuestros Productos</h2>
                <p className="section-text">
                    El inventario de hardware está seleccionado específicamente para
                    cubrir desde jugadores casuales hasta competidores profesionales:{" "}
                </p>
            </div>
            <div className=" container">

            {

                    products.map(product => (
                        <ProductCard key ={product.id} product = { product} />
                    ))

            }



            </div>
        </>
    )
}
