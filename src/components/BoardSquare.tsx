import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../constants'
import { canMoveKnight, moveKnight } from '../Game'
import Square from './Square'

interface IProps {
    x: number
    y: number
    children: React.ReactNode
}

const Overlay: React.FC<{ color: string }> = ({ color }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: 1,
                opacity: 0.5,
                backgroundColor: color,
            }}
        />
    )
}

const BoardSquare: React.FC<IProps> = ({ x, y, children }) => {
    const black = (x + y) % 2 === 1

    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: ItemTypes.KNIGHT,
            canDrop: () => canMoveKnight(x, y),
            drop: () => moveKnight(x, y),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [x, y]
    )
    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <Square black={black}>{children}</Square>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>
    )
}

export default BoardSquare
