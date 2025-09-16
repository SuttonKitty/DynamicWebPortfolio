import './styles.css'
import kitty from '../src/assets/kitty.jpg'
//import react librerary core
import React from 'react'
//react dom allows us to write JSX for web browsers
import ReactDOM from 'react-dom/client'
//to use componet: import it first
import App from './App'
//optional: import gloable CSS file
import './global.css'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
