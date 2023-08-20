import { Products, Header, Footer } from "./components";
import { useFilters } from "./hooks/useFilters";
import { products as initialProducts } from "./mocks/products.json";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/carTContext";

export const App = () => {

    const { filterProducts } = useFilters();
    const filteredProducts = filterProducts(initialProducts);

    return (
        <CartProvider>
            <Header />
            <Cart />
            <Products products={filteredProducts} />
            <Footer />
        </CartProvider>
    );
};
