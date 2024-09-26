import { Link,Outlet } from "react-router-dom"
import "./NavBar.css";
import aperture_logo_negro from "../../assets/aperture_logo_negro.png";
import CartWidget from "./CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';

function NavBar() {
  return (
    <header>
        <Link to={"/"} class="navbar-brand" >
            <img className="logo" src={aperture_logo_negro} alt="logo de la marca" />
        </Link>
    <nav class="navbar navbar-expand-lg">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav categories-navbar">
              <li class="nav-item"><Link to={"/"} class="nav-link category-navbar">Productos</Link></li>
              <li class="nav-item"><Link to={"/category/electronic"} class="nav-link category-navbar">Electrónicos</Link></li>
              <li class="nav-item"><Link to={"/category/others"} class="nav-link category-navbar">Varios</Link></li>
            </ul>
          </div>
          <CartWidget/>
    </nav>
    <Outlet/>
</header>
  )
}

export default NavBar