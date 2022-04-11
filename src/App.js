import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Cart from './pages/Cart'
import ItemDetailContainer from './components/ItemDetailContainer';
import CustomProvider from './context/CustomProvider';

function App() {
  return (
    <CustomProvider value={ [] }>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/categories/:categorieId" element={<ItemDetailContainer />} />
          <Route exact path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </CustomProvider>
  )
}
export default App;
