import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navBar">
      <NavLink
        to="/"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/biography"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Biographies
      </NavLink>
      <NavLink
        to="/listen"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Ecouter Voir
      </NavLink>
      <NavLink
        to="/gallery"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Galerie
      </NavLink>
      <NavLink
        to="/organizer"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Agenda
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Contact
      </NavLink>
    </nav>
  )
}
