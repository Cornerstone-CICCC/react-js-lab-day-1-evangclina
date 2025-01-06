export type User = {
    id: number, 
    fullname: string,
    age: number, 
    education: string, //select
    gender: string, //radio
    skills: string[], //checkbox
    bio: string //textarea
}