import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BasketApp from './Basket';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom"

const BasketProducts =[
];

const myProducts = [
    {
      id: 1,
      name: 'Хлеб',
      price: 20,
      quantity:0
    },
    {
      id: 2,
      name: 'Сыр',
      price: 40,
      quantity:0
    },
    {
      id: 3,
      name: 'Макароны',
      price: 80,
      quantity:0
    },
    {
      id: 4,
      name: 'Печеньки',
      price: 10,
      quantity:0
    }
  ];

class ProductStore extends React.Component{
    state = {
        BasketProducts:BasketProducts,
        products:myProducts
    }

    handleAddProducts = (BasketData) => {
        const nextItem = [BasketData, ...this.state.BasketProducts]
        this.setState({BasketProducts: nextItem})
    }

    deleteBasket = () =>{
        const {BasketProducts} = this.state
        this.setState({BasketProducts: ''})
    }

    render(){
    return(
    <React.Fragment>
      <BrowserRouter>
        <div>
              <Route exact path="/Products" render={() => (
              <App onAddProd = {this.handleAddProducts}
              products = {this.state.products}
              />
              )}/>
              <Route path="/Basket" render={() => (
              <BasketApp BasketProducts = {this.state.BasketProducts}
               deleteBasket = {this.deleteBasket}
               />
              )}/>
        </div>
      </BrowserRouter>
   </React.Fragment>
        )
    }
}

ReactDOM.render(<ProductStore />, document.getElementById('root'));   
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();