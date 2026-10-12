import { createContext, useContext, useState } from "react"
import {getUsers} from "../services/users.services"

 const AuthContext = createContext()

export  function AuthProvider({children}) {
    //Restaurar la sesion desde localStorage al montar

    const[user, setUser]= useState(() =>{
        const stored = localStorage.getItem('user')
        return stored ? JSON.parse(stored) : null
    })
   

  async function login(email , password) {
    const users = await getUsers()
    const found = users.find((u)=> u.email === email && u.password === password)
    if(!found) 
        return false
    
    setUser(found)
    localStorage.setItem("user" ,JSON.stringify(found))
    return true
  }

  function logout(){
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
<AuthContext.Provider
value = {{
    user,
    isLoggedIn: !!user,
    isAdmin: user?.role === "Admin",
    login,
    logout,

}}
>
    {children}
</AuthContext.Provider>
  )
}

export function useAuth(){
    return useContext(AuthContext)
}
