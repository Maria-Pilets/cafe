const initialState = {
    cartItems: [] ,
    quantity:0,
    totalPrice:0
};
const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':

            return {
                ...state,
                cartItems:[...state.cartItems,action.payload],
                quantity: state.quantity+1



            };

        case 'REMOVE_FROM_CART':


            return {...state,
                cartItems: state.cartItems.map(obj =>
                    state.cartItems.indexOf(obj)===action.index? {...obj} : obj,
                ),
                quantity:state.quantity-1
            }
        case 'ADD_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(cartItem =>
                    cartItem.id === action.id
                        ? {...cartItem, quantity:cartItem.quantity + 1}
                        : cartItem,
                ),
            };
        case 'SUB_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(cartItem =>
                    cartItem.id === action.id
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity !== 1 ? cartItem.quantity - 1 : 1,
                        }
                        : cartItem,
                ),
            };
        case 'EMPTY_CART':
            return {
                ...state,
                products: state.cartItems.map(cartItem =>
                    cartItem.id === action.id
                        ? {...cartItem, quantity: 1}
                        : cartItem,
                ),
            };
        default:
            return state;
    }
};
export default cart