
import './App.css';
import Plans from './plans';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js'

function App() {

  return (
    <div className="App">
            
           
      <Plans data={data} /> 
       
      
    </div>
  );
}

export default App;
