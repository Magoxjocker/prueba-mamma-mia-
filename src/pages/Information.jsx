import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Product from '../components/Product'


const Information = () => {
  const location = useLocation()

  return (
    <div>
      <Product pizza={location.state?.pizza}/>
    </div>
  )
}

export default Information