import { createContext, useReducer, useContext } from "react";
import { reducer, initialState } from "../reducers/cart";

export const CartContext = createContext();

export const useCard = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('estas usando useCard fuera de un CartProvider');
    }
    return context;
}

export const useCartReducer = () => {
    const [cart, dispatch] = useReducer(reducer, initialState);

    const addCart = (product) => {
        const actions = {
            type: "ADD_TO_CART",
            payload: product
        }
        dispatch(actions);
    }

    const removeToCard = (product) => {
        const actions = {
            type: "REMOVE_TO_CART",
            payload: product
        }
        dispatch(actions);
    }

    const clearCart = () => {
        const actions = {
            type: "CLEAR_CART"
        }
        dispatch(actions);
    }

    return {
        cart,
        addCart,
        clearCart,
        removeToCard
    }
}


export const CartProvider = ({ children }) => {

    const { cart, addCart, clearCart, removeToCard } = useCartReducer();

    return (
        <CartContext.Provider value={{
            cart,
            addCart,
            clearCart,
            removeToCard
        }}>
            {children}
        </CartContext.Provider>
    )
}