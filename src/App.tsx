import './App.css';
import DomRef from './ref/DomRef';
import { MutableRef } from './ref/MutableRef';

function App() {
  return (
    <div className="App">
      <DomRef></DomRef>
      <MutableRef></MutableRef>
    </div>
  );
}

export default App;
