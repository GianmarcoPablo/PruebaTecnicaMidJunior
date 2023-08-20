import { useFiltros } from "../context/filtersContext";
export const useFilters = () => {

    const { filters } = useFiltros();

    const filterProducts = (products) => {
        return products.filter((product) => {
            return (
                product.price >= filters.minPrice && (
                    filters.category === "all" ||
                    product.category === filters.category
                )
            )
        });
    };

    return {
        filterProducts,
        filters,
    }
}
