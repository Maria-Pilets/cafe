import React from "react";
import './Result.css'


function CartItem({name,price,img,quantity,remove,id,plusItem,minusItem}){


    const onClickItem=()=>{
        const dishObj={name,price,id,img,quantity}
        remove( dishObj)

        console.log(dishObj)


    }
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }



    const onClickPlus=()=>{
       plusItem(id)
    }

    const onClickMinus=()=>{
        minusItem(id)
    }

    return  (

        <div className="result_ul">
            <h3 className="result_name">{name}</h3>
            <img className="result_divimg" src={img} alt={name}/>
            <h2 className="result_name">{price} $</h2>
            <button className ="button" onClick={onClickItem}>Remove from the cart</button>
            <button onClick={onClickMinus}>Minus item</button>
            <button onClick={onClickPlus}>Plus item</button>
            <div>{quantity}</div>
            <div>{TotalPrice(price,quantity)} $</div>

        </div>



    )
}

export default CartItem