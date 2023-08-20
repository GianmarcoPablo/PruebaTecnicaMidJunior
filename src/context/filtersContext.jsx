import { useState } from "react";
import { createContext,useContext } from "react";

export const FiltersContext = createContext();

export const useFiltros = () => useContext(FiltersContext);

export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0,
    })

    return (
        <FiltersContext.Provider value={ {
            filters,
            setFilters,
        } }>
            {children}
        </FiltersContext.Provider>
    )
}

