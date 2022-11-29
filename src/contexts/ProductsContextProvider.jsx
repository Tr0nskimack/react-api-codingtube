import { createContext, useEffect, useState } from 'react'

export const ProductsContex = createContext()

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <ProductsContex.Provider value={products}>
      <div>{children}</div>
    </ProductsContex.Provider>
  )
}
