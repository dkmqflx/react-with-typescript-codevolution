import './App.css';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Status status="error"></Status>
      {/* <Status status="add"></Status> , error 발생 */}

      <Heading>This is Children</Heading>

      <Oscar>
        <Heading>Heading To Oscar</Heading>
      </Oscar>

      <Greet name="greet name" isLoggedIn={true}></Greet>
    </div>
  );
}

export default App;
