import './App.css';
import { LoggedIn } from './state/LoggedIn';
import { User } from './state/User';

function App() {
  return (
    <div className="App">
      <LoggedIn></LoggedIn>
      <User></User>
    </div>
  );
}

export default App;
