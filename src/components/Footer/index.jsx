import { NavLink } from 'react-router-dom';
import './footer.scss';

function Footer() {
    return (
        <div className="footer">
            <ul className="footer__ul">
                <li className="footer__li">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'footer__link--active' : 'footer__link'
                        }
                    >
                        Présentation
                    </NavLink>
                </li>
                <li className="footer__li">
                    <NavLink
                        to="/skills"
                        className={({ isActive }) =>
                            isActive ? 'footer__link--active' : 'footer__link'
                        }
                    >
                        Mes compétences
                    </NavLink>
                </li>
                <li className="footer__li">
                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) =>
                            isActive ? 'footer__link--active' : 'footer__link'
                        }
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li className="footer__li">
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? 'footer__link--active' : 'footer__link'
                        }
                    >
                        Me contacter
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
