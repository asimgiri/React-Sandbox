import React, { useEffect } from 'react';

let dragged;

export default function DragEvent() {

    useEffect(() => {
        document.body.addEventListener('dragstart', (event) => {
            dragged = event.target;
            event.target.style.opacity = .2;
            console.log(dragged.parentNode);
        })

        document.body.addEventListener('dragover', (event) => {
            event.preventDefault();
        })

        document.body.addEventListener('dragend', (event) => {
            event.target.style.opacity = 1;
        })

        document.body.addEventListener('drop', (event) => {
            event.preventDefault();

            if (event.target.className === "dropzone") {
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
                console.log(event.target)
            }

        })

    }, [])

    return (
        <div>
            <div id="first" className="dropzone">
                <div id="draggable" draggable="true">
                    This div is draggable
                </div>
            </div>
            <div id="second" className="dropzone"></div>
            <div id="third" className="dropzone"></div>
            <div id="forth" className="dropzone"></div>
        </div >
    )
}