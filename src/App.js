import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v2/all')
//       .then(res => res.json())
//       .then(data => setCountries(data));
//   }, []);

//   return (
//     <div>
//       <h2>List of Countries</h2>
//       {
//         countries.map(country => <Country
//           name={country.name}
//           capital={country.capital}
//           timezones={country.timezones[0]}
//           nativeName={country.nativeName}
//         ></Country>)
//       }
//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div className='container'>
//       <h3>{props.name}</h3>
//       <p>Capital: {props.capital}</p>
//       <p>Time Zone: {props.timezones}</p>
//       <p>Native Name: {props.nativeName}</p>
//     </div>
//   );
// }

export default App;