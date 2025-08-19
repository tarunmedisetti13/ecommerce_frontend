import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { getAllProducts } from './api/products.js';
import ProductDetail from './pages/ProductDetail'
import ScrollToTop from './components/ScrollToTop.jsx';

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let ignore = false

    getAllProducts()
      .then((products) => {
        if (!ignore) {
          setProducts(products)
          console.log(products)
        }
      })
      .catch((err) => console.log(err))

    return () => {
      ignore = true // cleanup → stops second StrictMode call
    }
  }, [])
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Navigate to="/products" replace />} />
        <Route path='/products' element={<HomePage products={products} />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
