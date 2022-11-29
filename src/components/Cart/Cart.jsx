import { useContext } from 'react'

import { TotalContext } from '../../contexts/TotalContexProvider'

export const Cart = () => {
  const [total, setTotal] = useContext(TotalContext)
  return (
    <div className="cart">
      <div className="details">
        <p className="cart_price">Total: ${total}</p>
        <button
          onClick={() => {
            setTotal(0)
          }}
        >
          Borrar
        </button>
      </div>
    </div>
  )
}
