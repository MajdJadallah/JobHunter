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
        </div>
      </nav>
    </header>
  );
};

export default Header;
