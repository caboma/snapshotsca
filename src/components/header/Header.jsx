import './Header.scss'
import { sliderList } from '../../helpers/headerData'
import { FaArrowLeft, FaArrowRight, FaCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="header__container">
      <div className='slider'>
        {
          sliderList.map((imageList, index) => {
            return (
              <img src={imageList.src} alt={imageList.alt} key={index} className='slider__image' />
            )
          })
        }
      </div>


    </div>
  )
}

export default Header