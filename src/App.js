import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Countries />
    </div>
  );
}

// function Countries(){
//   const [countries, setCountries] = useState([])
//   useEffect( ()=>{
//     fetch(`https://restcountries.eu/rest/v2/all`)
//       .then(response => response.json())
//       .then(data => setCountries(data))
//   },[])

//   return (
//     <div>
//       <h2>Traveling around the world</h2>
//       <h4>Countries Available: {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}/>)
//       }
//     </div>
//   )
// }


// function Country(props){
//   return(
//     <div>
//       <h3>Country Name: {props.name}</h3>
//       <p>Capital: {props.capital}</p>
//     </div>
//   )
// }


export default App;
