import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Slider />
    </BrowserRouter>

  );
}

export default App;
