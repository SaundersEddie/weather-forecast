import WeatherNavbar from './components/Navbar/WeatherNavbar';
import DisplayWeather from './components/DisplayWeather/DisplayWeather';
import WeatherAPI from './utils/API';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container">
      <WeatherNavbar />
      <DisplayWeather />
      <WeatherAPI />
    </div>
  );
}

export default App;
