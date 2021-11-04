import './App.css';
import {Route, Router} from 'react-router-dom';
import History from './components/History';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import AddItem from './pages/AddItem';
import AddCategory from './pages/AddCategory';

function App() {
  return (
    <div>
      <Router history={History}>
        <Navbar />
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/add-item'>
          <AddItem />
        </Route>
        <Route path='/add-category' exact>
          <AddCategory />
        </Route>
      </Router>
    </div>
  );
}

export default App;
