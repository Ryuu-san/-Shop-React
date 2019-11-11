import React from 'react';
import ReactDOM from 'react-dom';
import '../../src/index.css';
import App from '../../src/components/App';
import BasketApp from '../../src/components/Basket';
import * as serviceWorker from '../../src/serviceWorker';
import {BrowserRouter, Route} from "react-router-dom"

const BasketProducts =[
];

const myProducts = [
    {
      id: 1,
      name: 'Хлеб',
      price: 20,
      quantity:0,
      amountAdded:1
    },
    {
      id: 2,
      name: 'Сыр',
      price: 40,
      quantity:0,
      amountAdded:1
    },
    {
      id: 3,
      name: 'Макароны',
      price: 80,
      quantity:0,
      amountAdded:1
    },
    {
      id: 4,
      name: 'Печеньки',
      price: 10,
      quantity:0,
      amountAdded:1
    }
  ];

class ProductStore extends React.Component{
constructor(props){
    super(props);
        
    this.state ={
    BasketProducts:BasketProducts,
    products:myProducts,
    }
}
    handleAddProducts = (BasketData) => {
        const nextItem = [...this.state.BasketProducts, BasketData]
        const NewProducts = nextItem.filter((set => f => !set.has(f.id) && set.add(f.id))(new Set))
        this.setState({BasketProducts: NewProducts})
    }

    AddAmountAdded = (q) =>{
        if(this.state.BasketProducts == ''){
            return
        }else{
            const AmountFilter = this.state.BasketProducts.filter((item) => {
                if(q.id == item.id){
                    item.amountAdded = q.amountAdded + item.amountAdded
                }
            })
        }
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
                AddAmountAdded = {this.AddAmountAdded}
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

export default ProductStore;