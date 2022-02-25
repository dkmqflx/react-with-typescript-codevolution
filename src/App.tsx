import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {
  return (
    <div className="App">
      <Button handleClick={(event, id) => console.log('buttonClicked', event, id)}></Button>
      <Input value="" handleChange={(event) => console.log(event)}></Input>
    </div>
  );
}

export default App;
