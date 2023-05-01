import { Route, Routes  } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Product from './component/Prodcut/Product';
import Addtocart from './component/Addtocart/Addtocart';
import ViewProduct from './component/ViewProduct/ViewProduct';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route parh='/add' element={<Addtocart/>}/>
        <Route parh='/view' element={<ViewProduct/>}/>

      </Routes>
    </>
  );
}

export default App;
