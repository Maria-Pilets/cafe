import  './app.css';
import React from "react";

import Cart from './Cart';
import {Route} from "react-router-dom"
import Home from "./Home";

function App() {


        return (
            <div>

                <Route path="/" component={Home} exact/>
                <Route path="/cart" component={Cart} exact/>

            </div>
        );
}

export default App;
