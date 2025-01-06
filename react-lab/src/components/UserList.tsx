import { User } from "../types/user.types"

type Props = {
    user: User,
    onDelete: (id: number) => void,
    onEdit: (id: number) => void,
    onView: (id: number) => void,
}
const UserList = ({user, onDelete, onEdit, onView}: Props) => {
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                </tr>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.fullname}</td>
                    <td><button onClick={() => onView(user.id)}>View</button></td>
                    <td><button onClick={() => onEdit(user.id)}>Edit</button></td>
                    <td><button onClick={() => onDelete(user.id)}>Delete</button></td>
                </tr>
            </table>
        </div>
    )
}

export default UserList