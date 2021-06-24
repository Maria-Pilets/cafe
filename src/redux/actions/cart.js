export const addToCart =(payload)=> {
    return {
        type: 'ADD_TO_CART',
        payload
    };
};
export const removeFromCart = id => {
    return {
        type: 'REMOVE_FROM_CART',
        payload:id,
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