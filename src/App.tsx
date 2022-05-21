import React from 'react';
import logo from './logo.svg';
import './App.css';
import cards from './mockdata/card.json'
import Card from './components/cards'


function App() {
  return (
    <section className="card-list">
      {cards.map(c => <Card first_name={c.first_name} last_name={c.last_name} company={c.company} movie_title={c.movie_title}/>)}
    </section>
  );
}

export default App;
