// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Friend name="Nahid" age="41"></Friend>
      <Friend name="Easin" age="40"></Friend>
    </div>
  );
}

/* <Person name="Rubel" job="Acting"></Person>
      <Person name="Mousumi" job="Actress"></Person>
      <Person></Person> */

// function Person(props) {
//   console.log(props);
//   const Person = {
//     backgroundColor: 'lightgoldenrodyellow',
//     color: 'crimson',
//     border: '3px solid',
//     borderRadius: '15px',
//     padding: '15px'
//   };

// return (
//   <div style={Person}>
//     <h1>Name: {props.name}</h1>
//     <h4>Profession: {props.job}</h4>
//   </div >
// );

function Friend(props) {
  return (
    <div className='Person'>
      <h3>
        Name:{props.name}
      </h3>
      <h5>
        Age:{props.age}
      </h5>
    </div>
  );
}

export default App;