import './App.css';
import { Box } from './context/Box';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
