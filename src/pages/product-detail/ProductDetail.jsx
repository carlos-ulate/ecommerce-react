import { useParams } from "react-router"
import "./ProductDetail.css"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getProductById } from "../../services/product.services";

export default function ProductDetail() {

const [ product, setProduct] = useState()

    //const { id } = useParams () // { id: valor} manera que normalmente se utiliza 
    const params = useParams()
    const id = params.id;
    
    useEffect (()=> {
        obtenerElProducto()
    }, [])

    async function obtenerElProducto() {
        try{
            const product = await getProductById(id)
            setProduct(product)

        } catch (error){
            Swal.fire({
                title:"Error",
                icon: "error",
                text: "Error al cargar el producto"
            })

        }
    }

    return (
        <section className="detalles">
            <div className="det-img">
                <img 
                width ="500"
                
                src={product?.image} 
                alt={product?.name} />
                <p>${product?.price}</p>
                <button className="add-to-cart">Agregar al carrito</button>
            </div>
            <div>
                <h2>{product?.name} </h2>
                <h6>{product?.category}</h6>
                <p>
                    La NVIDIA GeForce RTX 5070 Ti se posiciona como una de las tarjetas
                    gráficas más equilibradas y potentes de la arquitectura Blackwell,
                    diseñada específicamente para dominar el juego competitivo y de alta gama
                    en resoluciones <strong> 1440p</strong> y <strong>4K</strong>. Al combinar
                    una eficiencia energética optimizada con la última generación de núcleos
                    dedicados al trazado de rayos (Ray Tracing) y la renderización por
                    inteligencia artificial, este componente no solo eleva las tasas de
                    refresco a niveles extremos, sino que también transforma la experiencia
                    visual. Es la opción ideal para los entusiastas del hardware y creadores
                    de contenido que buscan un rendimiento de nivel entusiasta sin tener que
                    dar el salto económico hacia la gama ultra-alta.
                </p>
                <h2>Caracteristicas</h2>
                <ul>
                    <li>
                        Arquitectura: NVIDIA Blackwell (tecnología de proceso de 3nm de TSMC)
                    </li>
                    <li>
                        Memoria VRAM: <span className="inf">16GB GDDR7</span>, ofreciendo un
                        ancho de banda masivo y mayor velocidad que la generación anterior.
                    </li>
                    <li>
                        Interfaz de Memoria: Bus de <span className="inf">256 bits</span>.
                    </li>
                    <li>
                        Núcleos CUDA: Aproximadamente <span className="inf">8960 núcleos</span>{" "}
                        para un procesamiento paralelo masivo.
                    </li>
                    <li>
                        Ray Tracing de 4.ª Generación: Rendimiento duplicado en iluminación
                        realista, reflejos y sombras en tiempo real.
                    </li>
                    <li>
                        Tensor Cores de 5.ª Generación: Optimización extrema para tareas de
                        Inteligencia Artificial y
                        <span className="inf">compatibilidad exclusiva con DLSS 4</span>{" "}
                        (Multiplicación de Fotogramas por IA).
                    </li>
                    <li>
                        Consumo Energético (TDP): Alrededor de{" "}
                        <span className="inf">250W - 275W</span>, manteniendo una excelente
                        relación de rendimiento por vatio.
                    </li>
                    <li>
                        Conectividad: <span className="inf">Puertos DisplayPort</span> 2.1 y{" "}
                        <span className="inf">HDMI 2.1a</span>, listos para monitores con altas
                        tasas de refresco en <span className="inf">4K</span> y{" "}
                        <span className="inf">8K</span>.
                    </li>
                    <li>
                        Soporte de Códec: Codificadores duales AV1 de 8.ª generación (NVENC),
                        ideales para streaming de alta fidelidad y edición de video
                        ultrarrápida.
                    </li>
                </ul>
            </div>
        </section>

    )
}
