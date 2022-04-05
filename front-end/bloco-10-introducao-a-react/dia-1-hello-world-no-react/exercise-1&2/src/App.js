import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['estudar', 'correr', 'trabalhar', 'descansar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map(assignment => Task(assignment)) }</ul>
    );
  }
}

export default App;
