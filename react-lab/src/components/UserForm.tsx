import { ChangeEvent, FormEvent } from 'react'
import { User } from '../types/user.types'


type Props = {
    formData: Omit<User, "id">, 
    onChange:(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void, 
    onSubmit: (e: FormEvent) => void,
    editId: number
}

const UserForm = ({formData, onChange, onSubmit, editId}: Props) => {


    return (
        <form onSubmit={onSubmit}>
            <h2>User Form</h2>
            <div>
                <h3>Full Name</h3>
                <label htmlFor="fullname"></label>
                <input type="text" name="fullname" id="fullname" value={formData.fullname} onChange={onChange} required/>
            </div>
            <div>
                <h3>Age</h3>
                <label htmlFor="age"></label>
                <input type="number" name="age" id="age" value={formData.age} onChange={onChange} required/>
            </div>
            <div>
                <h3>Education Level</h3>
                <label htmlFor="education"></label>
                <select name="education" id="educations" value={formData.education} onChange={onChange} required>
                    <option value="">Select your education level</option>
                    <option value="Grade School">Grade School</option>
                    <option value="High School">High School</option>
                    <option value="College">College</option>
                </select>
            </div>
            <div>
                <h3>Gender</h3>
                <label htmlFor="gender">Female</label>
                <input type="radio" name="gender" id="female" value={formData.gender} onChange={onChange}/>
                <label htmlFor="gender">Male</label>
                <input type="radio" name="gender" id="male" value={formData.gender} onChange={onChange}/>
            </div>
            <div>
                <h3>Skills</h3>

                <label htmlFor="typeScript">TypeScript</label>
                <input type="checkbox" id="typeScript" name="skills" value="Typescript" onChange={onChange} checked={formData.skills.includes("Typescript")}/>

                <label htmlFor="skills-react">React</label>
                <input type="checkbox" id="skills-react" name="skills" value="React" checked={formData.skills.includes("React")} onChange={onChange}/>

                <label htmlFor="skills-node">Node</label>
                <input type="checkbox" id="skills-node" name="skills" value="Node" onChange={onChange} checked={formData.skills.includes("Node")}/>

                <label htmlFor="skills-nosql">NoSQL</label>
                <input type="checkbox" id="skills-nosql" name="skills" value="NoSQL" onChange={onChange} checked={formData.skills.includes("NoSQL")}/>
            </div>
            <div>
                <h3>About Yourself</h3>
                <textarea name="bio" id="bio" value={formData.bio} onChange={onChange}required></textarea>
            </div>
            <button type="submit">{editId ? "Save Changes" : "Add User"}</button>
            <button type="reset">Clear Form</button>
        </form>
    )
}

export default UserForm