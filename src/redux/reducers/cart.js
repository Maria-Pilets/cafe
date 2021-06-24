const initialState = {
    cartItems: [] ,
      totalPrice:0,
    numberCart:0
};
const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if(state.numberCart===0){
                let cart = {
                    id:action.payload.id,
                    quantity:1,
                    name:action.payload.name,
                    img:action.payload.img,
                    price:action.payload.price
                }
                state.cartItems.push(cart);
                console.log(cart)
            }
            else{
                let check = false;
                state.cartItems.map((item,key)=>{
                    if(item.id===action.payload.id){
                        state.cartItems[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        name:action.payload.name,
                        img:action.payload.img,
                        price:action.payload.price
                    }
                    state.cartItems.push(_cart);
                    console.log(_cart)
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1,
                totalPrice:state.totalPrice+ action.payload.price
            }

        case 'REMOVE_FROM_CART':
            let deletedItem = state.cartItems.find(item=> item.id === action.payload.id)
            let newItems=state.cartItems.filter(i => i.id !== action.payload.id)

            let newPrice=state.totalPrice-deletedItem.price*deletedItem.quantity
                        return {...state, cartItems: newItems,totalPrice:newPrice}
        case 'ADD_QUANTITY':
            let plusItem = state.cartItems.find(item=> item.id === action.id)
            let newTotal = state.totalPrice +plusItem.price
            plusItem.quantity += 1
            return      {
                    ...state,
                        totalPrice: newTotal
                    }
       case 'SUB_QUANTITY':
           {
               let minusItem = state.cartItems.find(item=> item.id === action.id)
               //if the qt == 0 then it should be removed
               if(minusItem.quantity === 1){
                   let new_items = state.cartItems.filter(item=>item.id !== action.id)
                   let newTotal = state.totalPrice - minusItem.price
                   return{
                       ...state,
                       cartItems: new_items,
                       minusItem: newTotal
                   }
               }
               else {
                   minusItem.quantity -= 1
                   let newTotal = state.totalPrice - minusItem.price
                   return{
                       ...state,
                      totalPrice: newTotal
                   }
               }

           }
        case 'EMPTY_CART':
            return {
                ...state,
                cartItems:[],
                quantity:0,
                totalPrice: 0
            };
        default:
            return state;
    }
};
export default cart