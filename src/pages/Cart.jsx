import React, { useContext, useEffect, useState } from 'react'
import { MammaMiaContext } from '../components/context/MyContext'

const Cart = () => {
  const mammaContext = useContext(MammaMiaContext)

  const [currentCart, setCurrentCart] = useState([])

  useEffect(() => {
    let newCart = mammaContext.cart;
    let tmpCart = []

    // Agrega solo los diferentes
    for (const key in newCart) {
      if (Object.hasOwnProperty.call(newCart, key)) {
        const element = newCart[key]
        if (!tmpCart.some(product => product.id === element.id)) {
          tmpCart.push(element)
        }
      }
    }

    tmpCart = tmpCart.map(product => {
      let itemFilter = newCart.filter(item => item.id === product.id)
      return {
        ...product,
        quantity: itemFilter.length,
        total_price: product.price * itemFilter.length
      }

    })
    setCurrentCart(tmpCart)
  }, []);

  return (
    <div className='p-4'>
      <div className='border'>
        <br />
        <div className='table-responsive'>
          <table className="table table-cart">
            <thead>
              <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio Total</th>
                <th scope="col">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {
                currentCart?.map(product => (
                  <tr key={Math.random()}>
                    <th scope="row">
                      <img className='tbl-img' src={product?.img} alt="" />
                    </th>
                    <td>{product.name}</td>
                    <td>{product.total_price}</td>
                    <td>{product.quantity}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <br />

        <div className='p-2'>
          <p>Total a Pagar: {mammaContext.totalPrice}</p>
          <button type="button" className="btn btn-info" onClick={() => alert(`El total a pagar es ${mammaContext.totalPrice}`)}>Pagar</button>
        </div>


      </div>
    </div>
  )
}

export default Cart