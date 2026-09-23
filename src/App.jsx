
import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './layout/footer/Footer'
import Header from './layout/header/Header'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import AdminProduct from './pages/admin/products/AdminProduct'
import Register from './pages/register/Register'
import Products from './pages/products/Products'
import ProductDetail from './pages/products/productDetail/ProductDetail'


function App() {


  return (
    <>

      <Header />
   


      <main className='main-container'>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path="/admin/products" element={<AdminProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/productDetail' element={<ProductDetail />} />
        </Routes>



      </main>
      <Footer />
    </>
  )
}

export default App
