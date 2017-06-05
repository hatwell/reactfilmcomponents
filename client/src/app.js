import React from 'react';
import ReactDOM from 'react-dom';
import FilmBox from './components/FilmBox.jsx'
import FilmList from './components/FilmList.jsx'

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app');
  ReactDOM.render(
  <FilmBox />,
  document.getElementById('app')
);
});
