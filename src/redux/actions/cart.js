export const addToCart =(index)=> {
    return {
        type: 'ADD_TO_CART',
        payload:index
    };
};
export const removeFromCart = index => {
    return {
        type: 'REMOVE_FROM_CART',
        payload:index,
    };
};
export const subtractQuantity = id => {
    return {
        type: 'SUB_QUANTITY',
        id,
    };
};
export const addQuantity = id => {
    return {
        type: 'ADD_QUANTITY',
        id,
    };
};
export const emptyCart = () => {
    return {
        type: 'EMPTY_CART',
    };
};