import React from 'react'
import { useState } from 'react';

const Ex01 = () => {

    const [num2, setNum2] = useState(0)
    
    const ck = (event) =>{
        console.log(event.target.innerText)
    }

    let num = 0
    const increase = () =>{
        console.log('숫자 1씩 증가!')

        setNum2(num2+1)
    }


  return (
    <div><div>
        <p>{num2}</p>
        <button onClick={increase}>+1</button>
        </div></div>
  )
}

export default Ex01