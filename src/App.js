import { Route } from 'react-router-dom';
import './App.css';
import CeramicsContainer from './Components/Ceramics/CeramicsContainer';
import Delivery from './Components/Delivery/Delivery';
import Footer from './Components/Footer/Footer';
import HeaderContainer from './Components/Header/headerContainer';
import Home from './Components/Home/Home';
import SearchPageContatiner from './Components/Search/SearchPageContatiner';

const App = () => {
  return <div className="appBox">
    <HeaderContainer />
    <main>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/ceramics" exact render={() => <CeramicsContainer />} />
      <Route path="/delivery" exact render={() => <Delivery />} />
      <Route path="/search" exact render={() => <SearchPageContatiner />} />
    </main>
    <Footer />
  </div>
}

export default App;
