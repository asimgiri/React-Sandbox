import React, { useState } from 'react'

export default function SandBox() {
    const [count, setCount] = useState(0)
    const [arr, setArr] = useState([])

    const onClickHandler = () => {
        setCount(
            c => c + 1,
        )
        setArr(
            [...arr, ' ' + count + ' ']
        )
    }

    const onClickHandler2 = () => {
        setCount(
            c => c - 1,
        )
        let a = [...arr]
        a.pop()
        setArr(a)
    }


    console.log(arr.length)

    return (
        <div>
            Next : {count}
            <br />
            <br />
            [{arr}]
            <br />
            <br />
            <button onClick={() => onClickHandler()}>Add Item</button>
            <br />
            <br />
            <button onClick={() => onClickHandler2()}>Remove Item</button>
        </div>
    )
}
