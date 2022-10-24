import React from 'react'

interface IProps {
    black: boolean
    children: React.ReactNode
}

const Square: React.FC<IProps> = ({ black, children }) => {
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'

    return (
        <div
            style={{
                backgroundColor: fill,
                color: stroke,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {children}
        </div>
    )
}

export default Square
