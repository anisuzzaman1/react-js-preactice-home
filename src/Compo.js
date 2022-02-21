// import logo from './logo.svg';
import './App.css';

function App() {
    const nayoks = ['Bappa', 'Rubel', 'Elish'];
    const nakis = ['Diti', 'Moushumi', 'Rojina'];
    const cinemas = [
        { nayok: 'Kuber', naika: 'Kopila' },
        { nayok: 'Rubel', naika: 'Moushumi' },
        { nayok: 'Razzak', naika: 'Kabori' },
    ]
    return (
        <div className="App">
            {
                cinemas.map(cinema => <Cinema nayok={cinema.nayok} naika={cinema.naika} ></Cinema>)
            }
        </div >
    );
}

function Cinema(props) {
    return (
        <div className='Person'>
            <h2>Nayok: {props.nayok}</h2>
            <h3>Naika: {props.naika}</h3>
        </div>
    );
}

/* 
<Friend name="Nahid" age="41"></Friend>
      <Friend name="Easin" age="40"></Friend>

<Person name="Rubel" job="Acting"></Person>
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
//   }
// };

// return (
//   <div style={Person}>
//     <h1>Name: {props.name}</h1>
//     <h4>Profession: {props.job}</h4>
//   </div >
// );

// function Person(props) {
//   return (
//     <div className='Person'>
//       <h3>
//         Name:{props.name}
//       </h3>
//       <h5>
//         Naika:{props.nakia}
//       </h5>
//     </div>
//   );
// }


// function Friend(props) {
//   return (
//     <div className='Person'>
//       <h3>
//         Name:{props.name}
//       </h3>
//       <h5>
//         Age:{props.age}
//       </h5>
//     </div>
//   );
// }

export default App;