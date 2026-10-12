import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function UsersRow({ users, handleEdit, handleDelete }) {


    return (
        <tr>
            <td>
                <img src={users.avatar} alt={users.name} />
            </td>
            <td>{users.name}</td>
            <td>{users.lastName}</td>
            <td>{users.email}</td>
            <td>{users.role}</td>
            <td className="description-container">{users.address}</td>
            <td> {users.createdAt}</td>
            <td>{users.zipCode}</td>
            

            <td className='button-container'>
                <button className="button-form btn btn-success" onClick={() => handleEdit(users.id)}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="button-form btn btn-danger" onClick={() => handleDelete(users.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </td>
        </tr>
    )
}
