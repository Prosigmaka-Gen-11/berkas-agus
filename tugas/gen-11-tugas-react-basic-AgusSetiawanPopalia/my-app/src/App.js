import logo from './logo.svg';
import './App.css';
import SelectCaracter from './function/selectCaracter';
import CustomizeVehicles from './function/CustomizeVehicles';

function App() {
  return (
    <div className="App">
      <SelectCaracter />
      <CustomizeVehicles />
    </div>
  );
}

export default App;
