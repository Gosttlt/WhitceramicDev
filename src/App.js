import { Route } from 'react-router-dom';
import './App.css';
import CeramicsContainer from './Components/Ceramics/CeramicsContainer';
import Footer from './Components/Footer/Footer';
import HeaderContainer from './Components/Header/headerContainer';
import Home from './Components/Home/Home';

const App = () => {
  return <div className="appBox">
    <HeaderContainer />
    <main>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/ceramics" exact render={() => <CeramicsContainer />} />
    </main>
    <Footer />
  </div>
}

export default App;
