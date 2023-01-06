import Footer from './components/common/Footer.jsx';
import NavBar from './components/common/NavBar.jsx';
import ItemListContainer from './components/Main/itemListContainer.jsx';
import ItemDetailContainer from './components/Main/itemDetailContainer'
import Cart from './components/Main/cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './components/Main/styles/item.css'
import './components/Main/styles/itemDetails.css'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path="/category/:categoryName" element={<ItemListContainer />}/>
          <Route path="/detail/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
