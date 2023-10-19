import './Header.scss'
import { sliderList } from '../../helpers/headerData'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'

const Header = () => {
  const [slide, setSlide] = useState(0);

  const slideLeft = () => {
    setSlide(slide - 1);
  }
  const slideRight = () => {
    setSlide(slide + 1);
  }

  return (
    <div className="header__container">
      <div className='slider'>
        <FaArrowLeft className='slider__leftArrow' onClick={slideLeft} />
        {
          sliderList.map((imageList, index) => {
            return (
              <img src={imageList.src} alt={imageList.alt} key={index} className={slide === index ? "slider__image" : "slider__image-hidden"} />
            )
          })
        }
        <FaArrowRight className='slider__rightArrow' onClick={slideRight} />
        <span className='slider__indicators'>
          {
            sliderList.map((_, index) => {
              return (
                <button key={index} onClick="" className={slide === index ? "slider__indicator" : "slider__indicator-hidden"}></button>
              )
            })
          }
        </span>
      </div>
    </div>
  )
}

export default Header