import './App.css';
import { Text } from './components/polymorphic/Text';

function App() {
  return (
    <div className="App">
      <Text as="h1" size="lg">
        Heading
      </Text>
      {/* <Text as="h1" htmlFor='someId' size="lg">
        Heading
      </Text>
      -> error 발생, h1 태그는 htmlFor 속성이 없으므로
      */}
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
