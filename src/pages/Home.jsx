import React from 'react'
import { Card } from '../components/Card'

import Pizzas from '../assets/pizzas.json'

const Home = () => {
  return (
    <div>

      <div className='bg-dark bg-gradient'>
        <h2 className='text-center text-white p-2'>Pizzeria Mamma mia</h2>
        <h4 className='text-center text-white p-2'>Tenemos las mejores pizzas que podras encontrar</h4>
      </div>
      <div className='container-home '>
        <div className="row">
          {
            Pizzas.map(pizza => <div className="col" key={Math.random()}><Card pizza={pizza}/></div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Home