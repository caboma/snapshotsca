import Home from './pages/home/Index'
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts'
import Portfolio from './pages/portfolio/Portfolio';
import Services from './pages/services/Services';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contacts />
      <Portfolio />
      <Services />
    </div>
  );
}

export default App;
