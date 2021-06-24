import React from "react";
import empty from './../empty.jpg'
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {addQuantity, removeFromCart, subtractQuantity, emptyCart} from "../redux/actions/cart";


function Cart() {
    const {cartItems, totalPrice} = useSelector(({cart}) => cart)
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(cartItems).forEach(function (id) {
        TotalCart += cartItems[id].quantity * cartItems[id].price;
        ListCart.push(cartItems[id]);
    });

    const dispatch = useDispatch()

    function handleClearCart() {
        dispatch(emptyCart())
    }

    function handleRemove(index) {
        dispatch(removeFromCart(index))
        console.log(cartItems.length)
    }

    function handlePlus(index) {
        dispatch(addQuantity(index))
    }

    function handleMinus(index) {
        dispatch(subtractQuantity(index))
    }


    return (
        <div>

        {
            cartItems.length === 0
            ?
                <img src={empty} alt="Cart is empty"/>

            :
            <div >
                <div>{ListCart.map((item, key) =>
                <CartItem key={key} price={item.price}
                          quantity={item.quantity} img={item.img}
                          name={item.name} id={item.id}
                          remove={handleRemove} plusItem={handlePlus} minusItem={handleMinus}
                          totalPrice={totalPrice}/>)}
                </div>
                <div>
                    <button onClick={handleClearCart}>Clear cart</button>
                </div>
                <div>To pay {totalPrice} $</div>
            </div>}





    </div>)
}
export default Cart;