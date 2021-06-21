import React from "react";
import './Result.css'


function CartItem({name,price,img,remove,index}){


    const onClickItem=()=>{

        remove(index)


    }


    return  (

    <div className="result_ul">
        <h3 className="result_name">{name}</h3>
        <img className="result_divimg" src={img} alt={name}/>
        <h2 className="result_name">{price}</h2>
        <button className ="button" onClick={onClickItem}>Remove from the cart</button>
    </div>
  )
}

export default CartItem