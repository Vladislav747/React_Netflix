import React from 'react';
import './App.css';
import Row from "./components/Row";
import request from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hey Clever Programmer! Let's build</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
    </div>
  );
}

export default App;
