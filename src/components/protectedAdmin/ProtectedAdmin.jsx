 import { Navigate , Outlet } from "react-router"
 import { useAuth } from "../../context/AuthContext"

export default function ProtectedAdmin() {
    const {isLoggedIn, isAdmin} = useAuth();
    
    if(!isLoggedIn) return <Navigate to="/login" replace/>
    if(!isAdmin) return <Navigate to="/" replace />

    return <Outlet />

   
}
