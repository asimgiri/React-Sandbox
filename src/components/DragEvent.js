import React, { useState, useEffect } from 'react';

let dragged;

export default function DragEvent() {

    useEffect(() => {
        document.body.addEventListener('dragover', (event) => {
            // console.log(event.target.id);
            event.preventDefault();
        })

        document.body.addEventListener('drop', (event) => {
            event.preventDefault();

            if (event.target.className === "dropzone") {
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
            }
        })


        document.body.addEventListener('dragstart', (event) => {
            dragged = event.target;
            console.log(dragged.parentNode);
        })
    })


    const onDragEnterHandler = () => {
        document.body.addEventListener('dragenter', (event) => {
            // console.log(event.target.id)
        })
    }

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