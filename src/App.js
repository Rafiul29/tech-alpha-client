import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import CheckOutSuccess from './components/CheckOutSuccess'


const App = () => {

  const isNavActiveStyles=({isActive})=>{
    return {
      color: isActive ? "#f97316":null,
    };
  }

  return (
   <>
    <div className='app min-h-screen bg-gray-50 text-gray-700'>
        <Navbar  isNavActiveStyles={isNavActiveStyles}/>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout-success' element={<CheckOutSuccess/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
    <Footer/>
   </>
  )
}

export default App