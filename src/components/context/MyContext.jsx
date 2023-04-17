import { createContext, useState } from "react"

export const MammaMiaContext = createContext()


export const MammaMiaProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const modifyCart = (data) => {
        // Esto junta ambos arreglos [...cart, ...[data]] dejandolo en 1 con toda la data (manteniendo la data anterior)
        setCart([...cart, ...[data]])
    }

    return (
        <MammaMiaContext.Provider value={{
            cart: cart,
            totalPrice: totalPrice,
            modifyCart: modifyCart,
            modifyTotalPrice: setTotalPrice
        }}>
            {children}
        </MammaMiaContext.Provider>
    )
}