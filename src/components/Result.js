import React from 'react';
import './Result.scss'

const Result=({price,name,err,img,id,onAdd,category,index})=>{

    let content=null;

    const onClickItem=()=>{
        const dishObj={name,price,id,category,img,index}
        onAdd(dishObj)
    }

    if(!err){

        content=(
                <div className="result_ul">
                                        <h3 className="result_name">{name}</h3>
                    <img className="result_divimg" src={img}/>
                    <h2 className="result_name">{price}$</h2>
                    <button className="button" onClick={onClickItem}>Add to basket</button>
                    <i></i>
                </div>
        )
    }





    return(
       <div className="result">
           {err?`No ${name}`: content}
       </div>

        );
}

export default Result;