import { NavLink } from 'react-router-dom';
import './header.scss';

function Header() {
    return (
        <>
            <header className="header">
                <div className="header__blockTitle">
                    <p className="header__name">
                        GRONDIN
                        <br /> WILLIAM
                    </p>
                    <h1 className="header__title">Développeur web</h1>
                </div>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'header__link--active'
                                        : 'header__link'
                                }
                            >
                                Présentation
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink
                                to="/skills"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'header__link--active'
                                        : 'header__link'
                                }
                            >
                                Mes compétences
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink
                                to="/portfolio"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'header__link--active'
                                        : 'header__link'
                                }
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'header__link--active'
                                        : 'header__link'
                                }
                            >
                                Me contacter
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
