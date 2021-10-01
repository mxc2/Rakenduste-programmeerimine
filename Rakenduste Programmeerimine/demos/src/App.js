import './App.css';
import { Route } from 'react-router-dom';
import Home from "./pages/Home"
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Additem from "./pages/AddItem"
import Addcategory from './pages/AddCategory';

function App() {
  return (
    <div>
      <Navbar/>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/add-item">
        <Additem/>
      </Route>
      <Route path="/add-category">
        <Addcategory/>
      </Route>
    </div>
  );
}

export default App;
