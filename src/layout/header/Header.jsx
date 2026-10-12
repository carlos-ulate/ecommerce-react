import "./Header.css"
import PageLogo from "../../assets/images/nexus_nav_log.png"
import UserLogo from "../../assets/images/Portrait_Placeholder.png"
import { NavLink } from "react-router"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAuth } from "../../context/AuthContext"

export default function Header() {
    const { isAdmin, isLoggedIn, logout, user } = useAuth()

    return (
        <header className="nav-bar">
            {/*div para nav de bootsrap*/}
            <div className="container-fluid ">
                <nav className="navbar navbar-expand-lg   ">
                    <p className="navbar-brand" href="#">
                        <img
                            className="header-logo"
                            src={PageLogo}
                            alt="Logo pagina"
                        />
                    </p>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">

                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Inicio
                                </NavLink>

                            </li>

                            { !isLoggedIn && (
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">
                                    Registro
                                </NavLink>
                                
                            </li>
                            )}
                            
                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">
                                    Contacto
                                </NavLink>
                            </li>
                             
                                {isAdmin&& (
                                    <li className="nav-item">
                                        <NavLink to="/admin/products" className="nav-link">Admin</NavLink>
                                    </li>
                                )}
                             
                            <li>
                                {isLoggedIn ? (
                                    <button type="button" onClick={logout} className="nav-link btn btn-link">
                                        Cerrar Sesion
                                    </button>
                                ) : (
                                    <NavLink to="/login" className="nav-link">
                                        Iniciar Sesión
                                    </NavLink>
                                )}
                            </li>
                          
                        </ul>


                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success button-search"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    {/*div para cart (carrito)*/}
                    <div className="cart-shop">
                        <a href="#" className="cart">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="cart-count" />
                        </a>
                    </div>
                    {/* div para menu con imagen*/}
                    <div className="drop-container  ">
                        <label className="drop-img" htmlFor="drop-check">
                            <img
                                className="img-profile"
                                src={user?.avatar || UserLogo}
                                alt="profile"
                            />
                        </label>
                        <input type="checkbox" id="drop-check" />
                        <div className="menu-container">
                            <ul className="drop-menu">
                                <li className="drop-item">
                                    <NavLink to="/about" className="nav-link">Mi Perfil</NavLink>
                                </li>
                                <li className="drop-item">
                                    <a href="#">Mis compras</a>
                                </li>
                                <li className="drop-item">
                                    <a href="#">Carrito</a>
                                </li>
                                <li className="drop-item">
                                    <a href="#">Configuracion</a>
                                </li>
                                <li className="drop-item">
                                    <a href="#">Cerrar Sesion</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    )
}
