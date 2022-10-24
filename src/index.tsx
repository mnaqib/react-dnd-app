import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { observe } from './Game'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

observe((position: any) =>
    root.render(
        <React.StrictMode>
            <App knightPosition={position} />
        </React.StrictMode>
    )
)
