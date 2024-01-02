import { BrowserRouter } from 'react-router-dom'

import { SnackProvider } from './contexts/SnackContext'
import { AppRoutes } from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from './styles/global'
import { Theme } from './styles/Theme'
import { CartProvider } from './contexts/CartContext'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <CartProvider>
          <AppRoutes />
          <GlobalStyle />
          <ToastContainer autoClose={2000}/>
          <Normalize />
          </CartProvider>
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  )
}
