
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignUp from './Elements/SignUp/SignUp';
import SignIn from './Elements/SignIn/SignIn';
import CartPage from './Pages/CartPage/CartPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import FilterPage from './Pages/FilterPage/FilterPage';
import Menu2 from './Elements/Menu2/Menu2';
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu2 />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/CartPage' element={<CartPage/>}></Route>
        <Route path='/ProductPage' element={<ProductPage/>}></Route>
        <Route path='/FilterPage' element={<FilterPage/>}></Route>
        <Route path='/CheckOutPage' element={<CheckOutPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
