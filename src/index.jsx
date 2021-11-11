import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Home from 'Containers/Home'
import { GuildProvider } from 'Contexts/GuildContext'
import { FiltersProvider } from 'Contexts/FiltersContext'

ReactDOM.render(
  <React.StrictMode>
    <GuildProvider>
      <FiltersProvider>
        <Home />
      </FiltersProvider>
    </GuildProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
