import "./styles/Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse , faFile , faPhone } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-left">
                    <div className="name-container">
                        <p className="name">
                            Taha Farzalizadeh
                        </p>
                    </div>
                    <div className="proficiency-container">
                        <p className="proficiency">
                            Front-end Developer
                        </p>
                    </div>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                <FontAwesomeIcon className="fa-icons nav-icons" icon={faHouse} />
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/resume" className="nav-link">
                                <FontAwesomeIcon className="fa-icons nav-icons" icon={faFile} />
                                Resume
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                <FontAwesomeIcon className="fa-icons nav-icons" icon={faPhone} />
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="tab-nav-container">
                <NavLink to="/" className="tab purple" >
                    <FontAwesomeIcon className="fa-icons nav-icons" icon={faHouse} />
                    <p>Home</p>
                </NavLink>
                <NavLink to="/resume" className="tab teal" >
                    <FontAwesomeIcon className="fa-icons nav-icons" icon={faFile} />
                    <p>Resume</p>
                </NavLink>
                <NavLink to="/contact" className="tab yellow" >
                    <FontAwesomeIcon className="fa-icons nav-icons" icon={faPhone} />
                    <p>Contact</p>
                </NavLink>
            </div>
        </div>

    );
};

export default Header;
