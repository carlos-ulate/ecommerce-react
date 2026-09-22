import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ProductRow({prod, handleEdit, handleDelete}) {
  

    return (
        <tr>
            <td>
                <img src={prod.image} alt={prod.name} />
            </td>
            <td>{prod.name}</td>
            <td>{prod.description}</td>
            <td> {prod.createdAt}</td>
            <td>${prod.price}</td>
            <td>{prod.stock}</td>
            <td>
                <button className="btn btn-success" onClick={() => handleEdit(prod.id)}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(prod.id)}> 
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </td>
        </tr>
    )
}
