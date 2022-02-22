import React from 'react';
import { Greet } from './components/Greet';
import './App.css';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Bruce2',
      last: 'Wayne2',
    },
    {
      first: 'Bruce3',
      last: 'Wayne3',
    },
  ];

  return (
    <div className="App">
      <Greet name="dododo" messageCount={10} isLoggedIn={false}></Greet>
      <Person name={personName}></Person>
      <PersonList names={nameList}></PersonList>
    </div>
  );
}

export default App;
