import React from 'react'
import { CardsContainer } from './components/Cards/CardsContainer'
import { Cart } from './components/Cart/cart'
import { ProductsContextProvider } from './contexts/ProductsContextProvider'
import { TotalContexProvider } from './contexts/TotalContexProvider'
import './assets/style.css'

const App = () => {
  return (
    <ProductsContextProvider>
      <TotalContexProvider>
        <div className="App">
          <CardsContainer />
          <Cart />
        </div>
      </TotalContexProvider>
    </ProductsContextProvider>
  )
}

export default App
