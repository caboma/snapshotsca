import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';


import './App.scss';

const App = () => {
  return (
    <div className='main__container'>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>


  );
}

export default App;
