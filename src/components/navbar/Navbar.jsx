
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../images/snapshots_dark.jpg'
import { links } from '../data'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='container nav_container'>
        <Link to="/" className='logo'>
          <img src={Logo} alt="Nav logo" />
        </Link>
        <ul className='nav__links'>
          {
            links.map(({ name, path }, index) => {
              return (
                <li><NavLink to={path}>{name}</NavLink></li>
              )
            })
          }

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
