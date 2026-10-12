import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router"
import Swal from "sweetalert2"
import { useAuth } from "../../context/AuthContext"
import "./Login.css"
import "../../layout/header/Header.css"

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    const ok = await login(email, password)

    if (!ok) {
      Swal.fire({
        title: "Error",
        text: "Credenciales incorrectas, intente nuevamente",
        icon: "error"
      })

      return
    } else {
      console.log("Sesion iniciada correctamente ")
    }
    navigate("/")
     

  }


  return (
    <>



      <nav className="navbar navbar-expand-lg   ">
        <NavLink to="/" className="nav-link">
          Inicio
        </NavLink>

      </nav>

      <div className="login-modal">
        <div className="login-box">
          <span className="close" id="closeBtn">&times;</span>

          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
            <input type="password" placeholder="Password" 
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <div className="row">
              <label>
                <input type="checkbox" />Recuerdame
              </label>
              <Link to="#" className="forgot">Olvide mi contraseña</Link>

            </div>
            <button type="submit" className="login-btn">Iniciar Sesión</button>
          </form>
          <p className="register">No tengo una cuenta <span>Crear Cuenta</span></p>
        </div>

      </div>
    </>
  )
}
