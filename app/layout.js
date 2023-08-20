import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from "./context/user"
import CartProvider from "./context/cart"
export const metadata = {
  title: 'Ecommerce app',
  description: 'This is an ecommerce app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer/>
        <UserProvider>
          <CartProvider>
        {children}
        </CartProvider>
        </UserProvider>
        </body>
    </html>
  )
}
