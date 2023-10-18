import { FaHome, FaCameraRetro, FaInfo, FaPhoneAlt } from "react-icons/fa";

export const navLinks = [
  {
    name: "HOME",
    path: '/',
    icon: <FaHome />
  },
  {
    name: "PORTFOLIO",
    path: '/portfolio',
    icon: <FaCameraRetro />
  },
  {
    name: "BIO",
    path: '/biography',
    icon: <FaInfo />
  },
  {
    name: "CONTACT",
    path: '/contact',
    icon: <FaPhoneAlt />
  }
]

export const sliderList = [
  {
    src: "../../images/OSC_3589.jpg",
    alt: "../../images/OSC_3589.jpg",
    title: "Title One",
    subtitle: "SubTitle One"
  },
  {
    src: "../../images/OSC_3589.jpg",
    alt: "../../images/OSC_3589.jpg",
    title: "Title Two",
    subtitle: "SubTitle Two"
  }
]