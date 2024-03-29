import { Link, NavLink } from 'react-router-dom'
import Logo from '../../images/snapshots_logo_light.png'
import { navLinks } from '../../helpers/navData'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <div className='top__nav'>
        <Link to="/" className='logo'>
          <img src={Logo} alt="Nav logo" />
        </Link>
        <ul className='top__nav-links'>
          {
            navLinks.map(({ name, path }, index) => {
              return (
                <li><NavLink to={path} key={index}> {name} </NavLink></li>
              )
            })
          }
        </ul>
      </div>
      <div className='side__nav'>
        {
          navLinks.map(({ path, icon }, index) => {
            return (
              <NavLink to={path} key={index}>
                <div className='side__nav-item'>
                  {icon}
                </div>
              </NavLink>

            )
          })
        }
      </div>
    </nav>
  )
}

export default Navbar
