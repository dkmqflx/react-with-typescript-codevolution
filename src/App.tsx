import './App.css';
import { CustomComponent } from './components/html/CustomComponent';

function App() {
  return (
    <div className="App">
      <CustomComponent name="22" isLoggedIn={false}></CustomComponent>
    </div>
  );
}

export default App;
