import React from "react";
import './Result.css'


function CartItem({...obj}){


    const onClickItem=()=>{
        const dishObj={...obj}
        obj.remove( dishObj)
        console.log(obj)


    }


    return  (

        <div className="result_ul">
            <h3 className="result_name">{obj.name}</h3>
            <img className="result_divimg" src={obj.img} alt={obj.name}/>
            <h2 className="result_name">{obj.price}</h2>
            <button className ="button" onClick={onClickItem}>Remove from the cart</button>
        </div>
    )
}

export default CartItem