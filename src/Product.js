// import logo from './logo.svg';
import './App.css';

function App() {
    const products = [
        { name: 'iPhone13', price: "100000" },
        { name: 'Macbook Air', price: "120000" },
        { name: 'Apple Watch', price: "40000" }
    ]
    const price = ['100000', '120000', '40000'];

    return (
        <div className="App">
            {
                products.map(product => <Product name={product.name} price={product.price}></Product>)
            }
            {/* <Product name={product[0]} price={price[0]}> </Product>
      <Product name={product[1]} price={price[1]}> </Product>
      <Product name={product[2]} price={price[2]}> </Product> */}
        </div >
    );
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