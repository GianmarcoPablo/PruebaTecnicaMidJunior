import "./Filters.css";
import { useId } from "react";
import { useFiltros } from "../context/filtersContext";

export const Filters = () => {

    const minPriceFilterId = useId();
    const categoryFilterId = useId();
    const { filters, setFilters } = useFiltros()

    const handlePriceChange = (event) => {
        setFilters((prevState) => ({
            ...prevState,
            minPrice: event.target.value,
        }));
    };

    const handleCategoryChange = (event) => {
        setFilters((prevState) => ({
            ...prevState,
            category: event.target.value,
        }));
    };

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min={0}
                    max={1500}
                    onChange={handlePriceChange}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleCategoryChange}>
                    <option value="all">All</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    );
};
