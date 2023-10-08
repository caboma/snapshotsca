
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../images/snapshots_light.jpg'
import { links } from '../data'
import './navbar.scss'
import '../style/variables.scss'
const Navbar = () => {
  return (
    <nav>
      <div className='top__nav'>
        <Link to="/" className='logo'>
          <img src={Logo} alt="Nav logo" />
        </Link>
        <ul className='top__nav-links'>
          {
            links.map(({ name, path }, index) => {
              return (
                <li><NavLink to={path} key={index}> {name} </NavLink></li>
              )
            })
          }
        </ul>
      </div>
      <div className='side__nav'>
        {
          links.map(({ path, icon }, index) => {
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
