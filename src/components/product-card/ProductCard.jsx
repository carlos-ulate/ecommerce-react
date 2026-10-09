import { faEye, faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./ProductCard.css"
import { Link } from 'react-router'

export default function ProductCard({ product }) {
    return (
        <div className="card">
            <div className="card-image">
                <img
                    src={product.image}
                    alt={product.name}
                />
                <FontAwesomeIcon className="star-icon" icon={faStar} />

                <Link to={`product-detail/${product.id}`}

                    className="view-more-btn"
                    aria-label="Ver más"
                >
                    <FontAwesomeIcon icon={faEye} />
                </Link>
            </div>
            <div className="card-content">
                <h3>{product.name}</h3>

                <span className="price">${product.price.toFixed(2)}</span>
                <button className="add-to-cart">Agregar al carro</button>
            </div>
        </div>
    )
}
