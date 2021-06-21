import React from "react";
import empty from './../empty.jpg'
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {removeFromCart} from "../redux/actions/cart";


function Cart(){

    const {cartItems}=useSelector(({cart})=>cart)
    const dispatch=useDispatch()

    function handleRemove(index){
        dispatch(removeFromCart(index))
        console.log(cartItems.length)
     }




    return(
       <div>

           {cartItems.length===0
               ? <img src={empty} alt="Cart is empty"/>

               :
               <div>{cartItems.map((obj)=>
                   <CartItem key={cartItems.indexOf(obj)} {...obj} remove={handleRemove} />)}</div>
           }

       </div>


)}

    export default Cart;