import { User } from "../types/user.types"

type Props = {
    user: User
}
const UserProfile = ({user}: Props) => {
    if(!user) return null
    return (
        <div>
            <h3>{user.fullname}</h3>
            <p>Age: {user.age}</p>
            <p>{user.education}</p>
            <ul>
               <li>{user.skills}</li>
            </ul>
            <p>About: {user.fullname}</p>
            <p>{user.bio}</p>
        </div>
    )
}

export default UserProfile