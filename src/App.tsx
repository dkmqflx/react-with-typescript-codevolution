import './App.css';
import RandomNumber from './components/restriction/RandomNumber';

function App() {
  return (
    <div className="App">
      <RandomNumber value={10} isPositive></RandomNumber>
      {/* 자동으로 isPositive={true} 적용 */}

      {/* <RandomNumber value={10} isPositive isNegative ></RandomNumber> 
      error 발생
      */}
    </div>
  );
}

export default App;
