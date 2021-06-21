import './Category.scss'
import React from "react";

function Category({items,onClickCategory,activeCategory}){





    return (
        <div className="categories">
            <ul>
                {items.map((name,index)=>(
                    <li  className={activeCategory === index ?"active":"categories"}
                         onClick={(event)=>onClickCategory(index)}
                         key={index} name={name}>{name}</li>))}
            </ul>

        </div>

    )
}

export default Category;