import './Header.scss'
import { sliderList } from '../../helpers/headerData'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { useState } from 'react'

const Header = () => {
  const [slide, setSlide] = useState(0);

  const slideLeft = () => {
    setSlide(slide === 0 ? sliderList.length - 1 : slide - 1);
  }
  const slideRight = () => {
    setSlide(slide === sliderList.length - 1 ? 0 : slide + 1);
  }

  return (
    <div className="header__container">
      <div className='slider'>
        <FaLongArrowAltLeft className='slider__leftArrow' onClick={slideLeft} />
        {
          sliderList.map((imageList, index) => {
            return (
              <img src={imageList.src} alt={imageList.alt} key={index} className={slide === index ? "slider__image" : "slider__image-hidden"} />
            )
          })
        }

        <FaLongArrowAltRight className='slider__rightArrow' onClick={slideRight} />

        <span className='slider__indicators'>
          {
            sliderList.map((_, index) => {
              return (
                <button key={index} className="slider__indicator" onClick={() => setSlide(index)} />
              )
            })
          }
        </span>
      </div>
    </div>
  )
}

export default Header