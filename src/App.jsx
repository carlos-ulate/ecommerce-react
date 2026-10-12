
import { Route, Routes } from 'react-router'
import './App.css'

import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import AdminProduct from './pages/admin/products/AdminProduct'
import Register from './pages/register/Register'
import Products from './pages/products/Products'
import ProductDetail from './pages/product-detail/ProductDetail'
import Login from './pages/login/Login'
import Layout from './layout/Layout'
import AdminUsers from './pages/admin/users/AdminUsers'
import ProtectedAdmin from './components/protectedAdmin/ProtectedAdmin'




function App() {


  return (
    <>



      <Routes>

        <Route path='/login' element={<Login />} />

        <Route element={<Layout />} >





          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product-detail/:id' element={<ProductDetail />} />
          <Route path='/admin' element={<ProtectedAdmin />}>
            <Route path='products' element={<AdminProduct />} />
            <Route path='users' element={<AdminUsers />} />

          </Route>
          <Route path="*" element={<h1> NOT FOUND 404</h1>} />
        </Route>
      </Routes>




    </>
  )
}

export default App
