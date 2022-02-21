// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div >
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  }

  return (
    <div className='product'>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <ExternalUsers></ExternalUsers>
    </div>
  )
}

function ExternalUsers() {
  return (
    <div>
      <h3>External Users: </h3>
    </div>
  )
}

function Product(props) {
  return (
    <div className='product'>
      <h2>{props.name} </h2>
      <h3>Price: {props.price}</h3>
    </div>
  );
}
export default App;

/*
 const products = [
    { name: 'iPhone13', price: "100000" },
    { name: 'Macbook Air', price: "120000" },
    { name: 'Apple Watch', price: "40000" }
  ]
  const price = ['100000', '120000', '40000'];
*/

/* 
{
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name={product[0]} price={price[0]}> </Product>
      <Product name={product[1]} price={price[1]}> </Product>
      <Product name={product[2]} price={price[2]}> </Product> }
*/