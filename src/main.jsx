import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card.jsx'
import cards from "./cards.js";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className="card-container">
      {cards.map(({ id, ...card }) => (
        <Card key={id} {...card} />
      ))}
    </main>
  </StrictMode>,
)
