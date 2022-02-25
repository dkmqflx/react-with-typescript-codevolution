import './App.css';
import { User } from './context/User';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User></User>
      </UserContextProvider>
    </div>
  );
}

export default App;
