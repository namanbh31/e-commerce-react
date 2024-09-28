import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
function Brand() {
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid justify-content-center my-2">
          <Link className="navbar-brand" to="/">
            LuexThreads
          </Link>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Home
                </Link>
              </li>

            </ul>
            <span className="navbar-text me-4">
              <Link to='/cart'><BsCart4 color="white" /></Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Brand;
