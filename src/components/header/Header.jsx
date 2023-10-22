import './Header.scss'
import { sliderList } from '../../helpers/headerData'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

const Header = () => {
  const timerRef = useRef(null);

  const [slide, setSlide] = useState(0);

  const slideLeft = () => {
    setSlide(slide === 0 ? sliderList.length - 1 : slide - 1);
  }

  const slideRight = () => {
    setSlide(slide === sliderList.length - 1 ? 0 : slide + 1);
  }

  useEffect(() => {

    timerRef.current = (setTimeout(() => {
      slideRight();
    }, 3000))
  })

  return (

    <section className="header__container">
      <div className='slider'>
        {
          sliderList.map((imageList, index) => {
            return (
              <>
                <img src={imageList.src} alt={imageList.alt} key={index} className={slide === index ? "slider__image" : "slider__image-hidden"} />
                <div className={slide === index ? "slider__caption" : "slider__caption-inactive"}>
                  <h1 >{imageList.caption}</h1>
                  <p>{imageList.desc}</p>
                </div>
              </>
            )
          })
        }

        <FaLongArrowAltLeft className='slider__leftArrow' onClick={slideLeft} />

        <span className='slider__indicators'>
          {
            sliderList.map((imageList, index) => {
              return (
                <button key={imageList.caption} className={slide === index ? "slider__indicator-selected" : "slider__indicator"} onClick={() => setSlide(index)} />
              )

            })
          }
        </span>


        <FaLongArrowAltRight className='slider__rightArrow' onClick={slideRight} />


      </div>
    </section>
  )
}

export default Header