import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import Greeting from './components/Greeting'
import CharactersList from './components/CharactersList'
import CharactersAdd from './components/CharacterAdd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <CharactersAdd />
    <CharactersList />
  </React.StrictMode>
)
