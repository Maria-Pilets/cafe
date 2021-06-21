import React from "react";
import empty from './../empty.jpg'
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {removeFromCart} from "../redux/actions/cart";


function Cart(){

    const {cartItems,quantity}=useSelector(({cart})=>cart)
    const dispatch=useDispatch()

    function handleRemove(index){
        dispatch(removeFromCart(index))
     }




    return(
       <div>

           {quantity===0
               ? <img src={empty} alt="Cart is empty"/>

               :
               <div>{cartItems.map((obj)=>
                   <CartItem key={cartItems.indexOf(obj)} id={obj.id} name={obj.name}
                             img={obj.img} price={obj.price}
                             category={obj.category} remove={handleRemove} index={cartItems.indexOf(obj)}/>)}</div>
           }

       </div>


)}

    export default Cart;