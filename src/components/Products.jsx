import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icon";
import { useCard } from "../context/carTContext";

export const Products = ({ products }) => {
    const { addCart, cart, removeToCard } = useCard();

    const checkProduct = product => {
        return cart.some(p => p.id === product.id)
    }

    return (
        <main className="products">
            <ul>
                {products.map((product) => {
                    const isProductInCart = checkProduct(product);
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button style={{ backgroundColor: isProductInCart ? "red" : "#09f" }} onClick={() => isProductInCart ? removeToCard(product) : addCart(product)}>
                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )

                })}
            </ul>
        </main>
    );
};
