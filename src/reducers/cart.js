export const initialState = [];

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_CART": {
            const { id } = payload;
            const productInCart = state.findIndex(item => item.id === id);
            if (productInCart >= 0) {
                const newCart = structuredClone(state);
                newCart[productInCart].quantity += 1;
                return newCart;
            }
            return [...state, { ...payload, quantity: 1 }];
        }
        case "REMOVE_TO_CART": {
            const { id } = payload;
            return state.filter(item => item.id !== id);
        }
        case "CLEAR_CART": {
            return initialState;
        }
        default: {
            return state;
        }
    }
}