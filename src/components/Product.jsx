import React, { useContext } from 'react'
import { MammaMiaContext } from './context/MyContext';


const Product = ({ pizza }) => {
    const mammaContext = useContext(MammaMiaContext)

    const addToCart = (pizza) => {
        mammaContext.modifyCart(pizza);
    }

    return (
        <div className='container'>
            <div className='card-info'>
                <img src={pizza?.img} alt="" />
                <div className='row'>
                    <div className='col col-title'>nombre</div>
                    <div className='col'>{pizza?.name}</div>
                </div>
                <div className='row'>
                    <div className='col col-title'>descripcion</div>
                    <div className='col'>{pizza?.desc}</div>
                </div>
                <div className='row'>
                    <div className='col col-title'>ingredientes</div>
                    <div className='col'>{pizza?.ingredients.join(', ')}</div>
                </div>
                <div className='row'>
                    <div className='col col-title'>precio</div>
                    <div className='col'>${pizza?.price}</div>
                </div>
                <div className='row'>
                    <div className="col"><a className="btn btn-primary" onClick={() => addToCart(pizza)}>Añadir</a></div>
                </div>
            </div>
        </div>
    )
}

export default Product