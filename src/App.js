import React from 'react';
import Routes from './routes'
import Main from './pages/main/main';
import './style.css';
import Header from './components/header/header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
