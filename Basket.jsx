import React from "react"
import App from './App';
import index from './index';
import {Link} from "react-router-dom"

class BigApp extends React.Component {
render() {
    const { dataProducts } = this.props
    let newsTemplate

    if(dataProducts.length){
        newsTemplate = dataProducts.filter((set => f => !set.has(f.id) && set.add(f.id))(new Set)).map(function(item) {
            return (
             <Article key={item.id} dataProducts={item}/>
            )
        })
    }else{
        newsTemplate = <div>Корзина пустая</div>
    }

 return (
    <div>
     <table className="table">
        <thead> 
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            </thead>
           {newsTemplate}
        </table>
        <Link to="/Products"><button type="button" className="GoToBasket">Перейти к списку товаров</button></Link>
        <button className="GoToBasket" onClick={(event) => {this.props.VisualRemoval(); this.props.deleteBasket();}}>Удалить все</button>
        </div>
       )
    }
} 

class Article extends React.Component {
state = {
  name:this.props.dataProducts.name,
  price:this.props.dataProducts.price,
  quantity:this.props.dataProducts.quantity,
  id:this.props.dataProducts.id
}

handleReadMoreClick = () => {
    if(this.props.dataProducts.quantity == 0){
        return
    }else{
        this.setState({quantity: --this.props.dataProducts.quantity})
    }
}

render() {
    const { name, price, quantity} = this.state
        return (
        <tbody>
            <tr>
               <td>{name}</td>
               <td>{price}$</td>
               <td>{quantity}</td>
               <button onClick={(event) => {this.handleReadMoreClick()}}>-</button>
            </tr>
        </tbody>
        )
    }
}

class BasketApp extends React.Component{
state = {
 products:this.props.BasketProducts,
}

VisualRemoval = () => {
    const {products} = this.props
    this.setState({products: ''})
}

render(){
 return(
    <React.Fragment>
        <BigApp dataProducts={this.state.products}
        deleteBasket={this.props.deleteBasket}
        VisualRemoval={this.VisualRemoval}
        />
    </React.Fragment>)
  }
}
export default BasketApp;