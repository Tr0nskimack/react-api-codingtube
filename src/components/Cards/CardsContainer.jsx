import React, { useContext } from 'react'
import { ProductsContex } from '../../contexts/ProductsContextProvider'
import { TotalContext } from '../../contexts/TotalContexProvider'

export const CardsContainer = () => {
  const products = useContext(ProductsContex)
  const [total, setTotal] = useContext(TotalContext)

  return (
    <div className="cardContainer">
      {products.map((product) => {
        return (
          <div className="Card" key={product.id}>
            <img
              src={product.images[0]}
              className="card-img"
              alt="Imagen"
            ></img>
            <p className="product-name">{product.title}</p>
            <div className="priceContainer">
              <p className="price">${product.price}</p>
              <button
                onClick={() => {
                  setTotal(total + product.price)
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
