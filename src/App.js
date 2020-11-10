import WeatherNavbar from './components/Navbar/WeatherNavbar';
import DisplayWeather from './components/DisplayWeather/DisplayWeather';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container">
      <WeatherNavbar />
      <DisplayWeather />
    </div>
  );
}

export default App;
