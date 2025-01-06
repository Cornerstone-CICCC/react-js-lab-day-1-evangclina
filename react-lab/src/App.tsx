import UserForm from "./components/UserForm"
import UserList from "./components/UserList"
import UserProfile from "./components/UserProfile"
import { ChangeEvent, FormEvent, useState } from "react"
import { User } from "./types/user.types"

function App() {
  const [users, setUsers] = useState<User[]>([])

  const [formData, setFormData] = useState<Omit<User, "id">>({
      fullname: "", 
      age: 0, 
      education: "", //select
      gender: "", //radio
      skills: [], //checkbox
      bio: "" //textarea
  })

  const [edit, setEdit] = useState<number>(0)
  const [userOnView, setUserOnView] = useState<User | null >(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target

    if(type === "checkbox"){
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => {
        const skills = checked ? [...prev.skills, value] : prev.skills.filter(skill => skill !== value)
        return {...prev, skills}
      })
    }else{
      setFormData(prev => ({
        ...prev, 
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if(edit){
      setUsers(prev => (
        prev.map(user => (
          user.id === edit ? {...user, ...formData} : user 
        ))
      ))
      setEdit(0)
    }else{
      setUsers(prev => ([
        ...prev,
        {id: prev.length + 1, ...formData}
      ]))
    }

    setFormData({
      fullname: "", 
      age: 0, 
      education: "", //select
      gender: "", //radio
      skills: [], //checkbox
      bio: "" //textarea
    })
  }

  const handleEdit = (id: number) => {
    const user = users.find(user => user.id === id)
    if(user){
      setFormData({
        fullname: user.fullname, 
        age: user.age, 
        education: user.education, 
        gender: user.gender, 
        skills: user.skills, 
        bio: user.bio
      })
      setEdit(user.id)
    }
  }

  const handleDelete = (id: number) => {
    setUsers(prev => prev.filter(user => user.id === id))
    setUserOnView(null)
  }

  const handleView = (id: number) => {
    const user = users.find(user => user.id === id)
    if(user){
      setUserOnView(user)
    }
  }

  return (
    
    <>
      <UserForm formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        editId={edit}/>
      <h2>User List</h2>
          {users.map (user => (
            <UserList
              key={user.id}
              user={user}
              onView={handleView}
              onDelete={handleDelete}
              onEdit={handleEdit}/>
          ))}
      <UserProfile 
        user={userOnView}/>
    </>
  )
}

export default App
