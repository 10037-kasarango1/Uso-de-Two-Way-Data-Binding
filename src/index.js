import React from 'react';
import ReactDOM from 'react-dom';
import MiComponente from './MiComponente';

const App = () => {
  return (
    <div>
      <h1>Prueba de Two-Way Data Binding en React</h1>
      <MiComponente />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
