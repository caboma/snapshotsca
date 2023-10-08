import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Header from './components/header/Header';


import './App.scss';

const App = () => {
  return (
    <div className='main__container'>
      <BrowserRouter>
        <Navbar />
        <Header />
      </BrowserRouter>
    </div>


  );
}

export default App;
