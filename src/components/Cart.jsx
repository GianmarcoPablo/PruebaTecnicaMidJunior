import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icon"
import { useId } from "react"
import { useCard } from "../context/carTContext"
import "./Cart.css"

export const CartItem = ({ product }) => {
    const { thumbnail, price, title, quantity } = product
    const { addCart, removeToCard } = useCard();
    return (
        <li>
            <img
                src={thumbnail}
                alt={`imagen de ${title}`}
            />
            <div>
                <strong>{title}</strong> - <span>${price}</span>
            </div>
            <footer>
                <small>
                    Quantity: <strong>{quantity}</strong>
                </small>
                <button onClick={() => addCart(product)}>+</button>
            </footer>
        </li>
    )
}

export const Cart = () => {

    const cartCheckboxId = useId();
    const { cart, clearCart } = useCard();
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />
            <aside className="cart">
                <ul>
                    {cart.map(product => <CartItem key={product.id} product={product} />)}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}
