import React, { useState, useEffect } from 'react';

export default function MouseEvent() {
    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(0)

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            setPosX(x => event.screenX)
            setPosY(y => event.screenY)
        })
    }, [])

    return (
        <div>
            <p>X: {posX}</p>
            <p>Y: {posY}</p>
            <div className="circle" style={{ position: 'absolute', top: `${posY}px`, left: `${posX}px` }}></div>
        </div>
    )
}