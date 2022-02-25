import './App.css';
import List from './components/generics/List';

function App() {
  return (
    <div className="App">
      <List items={['1', '2', '3']} onClick={(item) => console.log(item)}></List>
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)}></List>
      <List
        items={[
          { id: 1, first: '1' },
          { id: 2, first: '2' },
          { id: 3, first: '3' },
        ]}
        onClick={(item) => console.log(item)}
      ></List>
    </div>
  );
}

export default App;
