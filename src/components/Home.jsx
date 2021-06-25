import './app.css';
import React from "react";
import Form from "./Form";
import Result from "./Result";
import {useState, useEffect} from "react"
import Category from "./Category";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/actions/cart";
import loading from './../loading.gif'
import Sort from "./Sort";
import {sortBy} from "../redux/actions/sort";


const categories = ['All', 'Dinner', 'Snack', 'Dessert', 'Beverage']

const sortItems=[{name:'by price',type:'price',order:'desc'},
 {name:'by alphabet',type: 'name',order:'asc'}]

function Home() {


    const dispatch = useDispatch()

    const handleAddToCart = (dishObj) => {
        dispatch(addToCart(dishObj))

    }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dishes, setDishes] = useState([]);
    const [search, setSearch] = useState('')
    const [filteredDishes, setFilteredDishes] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)

    const chooseCategory = (e) => {
        setActiveCategory(e)
        setSearch('')
    }


    const updateInput = (e) => {
        setSearch(e.target.value)

    }


    const onClickSort=(name)=>{
        dispatch(sortBy(name))
        console.log(name)
    }



    useEffect(() => {
        fetch(`https://cafe-35e87-default-rtdb.firebaseio.com/dishes.json`, {
            method: "GET",

            headers: {
                'Content-Type': 'application/json'
            }
        })

            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setDishes(data)
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
    }, [filteredDishes])


    useEffect(() => {
        if (activeCategory) {
            setFilteredDishes(dishes.filter(dish => {
                return dish.category === activeCategory
            }))
        }
        if (search) {
            setFilteredDishes(
                dishes.filter(dish => {
                    return dish.name.toLowerCase().includes(search)
                }))
        }
    }, [activeCategory, search])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <img src={loading} alt={"Loading..."}/>;
    }


    return (
        <div className="main">
            <Link to="/cart">Cart</Link>
<div className="content">
            <Form onChangeInput={updateInput}/>


</div>

            <div className="sort">
                    <Sort items={sortItems} onSelectSort={onClickSort}/>
            </div>
            <div className="content-top">
                <Category items={categories} onClickCategory={chooseCategory} activeCategory={activeCategory}/>

            <div className="content-items">

                {activeCategory === 0 && !search ?
                    dishes.map((d, index) => (
                        <Result key={d.id} id={d.id} name={d.name} err={d.error} img={d.imgsrc} onAdd={handleAddToCart}
                                price={d.price} category={d.category} index={index}/>
                    ))
                    :
                    filteredDishes.map((d, index) => (
                        <Result key={d.id} id={d.id} name={d.name} err={d.error} img={d.imgsrc} onAdd={handleAddToCart}
                                price={d.price} category={d.category} index={index}/>
                    ))
                }
            </div></div>
        </div>
    );

}

export default Home
