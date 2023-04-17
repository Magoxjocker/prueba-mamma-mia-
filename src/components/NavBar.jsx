import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MammaMiaContext } from './context/MyContext'

export const NavBar = () => {
  const mammaContext = useContext(MammaMiaContext)
  const [cost, setCost] = useState(0);

  useEffect(() => {
    const arrPrices = mammaContext?.cart?.map(pizza => pizza.price);
    const price = arrPrices?.reduce((a, b) => a + b, 0);
    mammaContext.modifyTotalPrice(price)
  }, [mammaContext?.cart])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient bg-dark">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="/home"><img className='imgLogo' alt="img-logo" src='https://images.emojiterra.com/google/android-12l/512px/1f355.png' /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">$ {mammaContext.totalPrice}</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
