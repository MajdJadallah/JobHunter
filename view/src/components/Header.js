import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = ({ active }) => {
  const Navigate=useNavigate(); 
  return (
    <header>
      <nav className="navbar navbar-expand-lg " id="navbar">
        <div className="container nav-container mx-0">
          <Link className="navbar-brand" to="/" id="logo">
            JobHunter
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse g-5 listnav" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="listItem">
              <li className="nav-item" >
                <Link
                  to="/"
                  className={"nav-link ".concat(
                    active === "find" ? "active" : ""
                  )}
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" >
                <Link
                  to="/findjob"
                  className={"nav-link ".concat(
                    active === "find" ? "active" : ""
                  )}
                  aria-current="page"
                  href="#"

                >
                  Find Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/browsecompanies"
                  className={"nav-link ".concat(
                    active === "browse" ? "active" : ""
                  )}
                >
                  Browse Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className={"nav-link ".concat(
                    active === "browse" ? "active" : ""
                  )}
                >
                 Profile
                </Link>
              </li>
            </ul>
            {sessionStorage.getItem("userActive") === "true" &&
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img 
                      src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/112.png'
                      className="rounded-circle" 
                      height="22"
                      alt="" 
                      loading="lazy" />
                  </a>
                 <ul className="dropdown-menu">
                    <li><Link className="dropdown-item">Action</Link></li>
                    <li><Link className="dropdown-item">Another action</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li className="dropdown-item" onClick={() => {
                      sessionStorage.setItem("userActive",false);
                     Navigate('/');
                     }}>
                     Log out
                     </li>
                  </ul>
                </li>
              }
              {sessionStorage.getItem("userActive") === "false" &&
                <form className="d-flex" role="search">
                  <Link to="/signin" className="btn" type="submit">
                    Login
                  </Link>
                  <Link to='/SignUp' className="btn" type="submit">
                    Sign Up
                  </Link>
                </form>
              }
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
