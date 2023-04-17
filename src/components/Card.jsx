import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { MammaMiaContext } from "./context/MyContext"

export const Card = ({ pizza }) => {
    const navigate = useNavigate()

    const mammaContext = useContext(MammaMiaContext)

    const addToCart = (pizza) => {
        mammaContext.modifyCart(pizza);
    }

    const goToInfo = (pizza) => {
        navigate('/pizza/' + pizza.id, {
            state: {
                pizza
            }
        })
    }

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={pizza.img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">Ingredientes</p>

                {pizza.ingredients.map(ingredient => (
                    <p key={Math.random()}>{ingredient}</p>
                ))}

                <p>$ {pizza.price}</p>

                <div className="row">
                    <div className="col"><a className="btn btn-primary" onClick={() => goToInfo(pizza)}>Ver mas</a></div>
                    <div className="col"><a className="btn btn-primary" onClick={() => addToCart(pizza)}>Añadir</a></div>
                </div>
            </div>
        </div>
    )
}