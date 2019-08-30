import React from "react"
import BasketApp from './Basket';
import index from './index';
import {Link} from "react-router-dom"

  function searchingFor(term) {
      return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || false;
    }
}

class BigApp extends React.Component {
 constructor(props){
    super(props);
    
     this.state ={
    term:''
    }
    this.searchHandler = this.searchHandler.bind(this);
}

  searchHandler(event){
    this.setState({ term: event.target.value})
  }

  render() {
    const {term} = this.state
    const {onAddProd} = this.props
    const newsTemplate = this.props.dataProducts.filter(searchingFor(term)).map(function(item) {
      return (
        <Article key={item.id} dataProducts={item} onAddProd = {onAddProd}/>
      )
    })

    return (
      <div>
     <form>
       <input type="text"
        placeholder="введите часть названия товара"
        onChange = {this.searchHandler}
        value={term}
       />
     </form>
      <table className="table">
         <thead> 
             <th>Название</th>
             <th>Цена</th>
             <th>Количество</th>
           </thead>
        {newsTemplate}
      </table>
      <Link to="/Basket"><button type="button" className="GoToBasket">Корзина</button></Link>
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
  this.setState({ quantity: ++this.state.quantity})
  const { name, price, quantity, id } = this.state
  this.props.onAddProd({id, name, price, quantity})
}

  render() {
    const { name, price, quantity} = this.state
    return (
      <tbody>
        <tr>
           <td>{name}</td>
           <td>{price}$</td>
           <td>{quantity}</td>
           <button onClick={this.handleReadMoreClick}>+</button>
        </tr>
      </tbody>
    )
  }
}

class App extends React.Component{
state = {
  products:this.props.products
}

  render(){
    return(
      <React.Fragment>
       <BigApp dataProducts={this.state.products}
       onAddProd = {this.props.onAddProd}
       />
      </React.Fragment>
    )
  }
}
export default App;