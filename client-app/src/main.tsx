import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/Cart.css'
import './assets/css/Product.css'
import ProductDetailPage from './pages/ProductDetailPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductDetailPage />
  </StrictMode>,
)
