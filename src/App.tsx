import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BoardSquare from './components/BoardSquare'

import Knight from './components/Knight'

interface IProps {
    knightPosition: any
}

function renderSquare(i: number, knightPosition: number[]) {
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, knightPosition)}
            </BoardSquare>
        </div>
    )
}

function renderPiece(x: number, y: number, [knightX, knightY]: number[]) {
    if (x === knightX && y === knightY) {
        return <Knight />
    }
}

const App: React.FC<IProps> = ({ knightPosition }) => {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                {squares}
            </div>
        </DndProvider>
    )
}

export default App
