import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Routes,Route} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'


export class Section extends Component {
    render() {
        return (
            <section>
            <Routes>
                    <Route path="/product" element={<Products/>} exact  />
                    <Route path="/product/:id" element={<Details/>} exact />
                    <Route path="/cart" element={<Cart/>}  exact/>
                    <Route path="/payment" element={<Payment/>} exact />
                    </Routes>
            </section>
        )
    }
}

export default Section
