import './App.css';
import {useState} from 'react'
import ProgressBar from './components/ProgressBar';
function App() {
  const [ percentage, setPercentage ] = useState(0)

  const handlePercentageChange = (e) => {
    if(e.target.value > 100 || e.target.value < 0){
      alert("Input cannot be greater than 100 or less than 0")
    }
    else{
      setPercentage(e.target.value)
    }
    
  }
  return (
    <div className="App">
      <ProgressBar value={percentage}/>
      <input
        type="number"
        value={percentage}
        min={0}
        max={100}
        onChange={handlePercentageChange}
      />
    </div>
  );
}

export default App;
