import React, {useEffect, useRef, useState} from 'react';
import './app.css'
import {useDispatch, useSelector} from "react-redux";




function Sort({onSelectSort,sortType,sortItems}){



    const sortRef=useRef(null)


    const [visible,setVisible]=useState(false)

    function handleOutsideClick(event){
        if (
            sortRef.current &&
            !sortRef.current.contains(event.target)
        )
        {
                setVisible(false)
        }
    }

    useEffect(() => {
        if (visible){
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [visible]);



    function onClickItem(index){
        onSelectSort(index)

        setVisible(false)
    }


    function onClickButton(e){
        setVisible(true)
    }
    return (
        <div className="dropdown">
            <button  onClick={onClickButton}   className="dropbtn">Sort by</button>
            {visible &&
            <div ref={sortRef}  className="dropdown-content show ">
                {sortItems.map((i,index)=> <a href="#" key={index} onClick={onClickItem} >{i.name}</a>)}
            </div>}
        </div>
    )
}
export default Sort;