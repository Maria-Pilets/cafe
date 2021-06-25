import React from 'react';
import './app.css'



function Sort({items,onSelectSort}){

    function onClickItem(name){
        onSelectSort(name)
        console.log(name)
    }
    return (
        <div className="dropdown">
            <button onClick={onClickItem} className="dropbtn">Sort by</button>
            <div id="myDropdown" className="dropdown-content show ">
                {items.map((i,index)=> <a href="#" key={index}>{i.name}</a>)}
            </div>
        </div>
    )
}
export default Sort;