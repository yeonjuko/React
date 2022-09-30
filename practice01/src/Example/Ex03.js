import React from 'react'
import {useState} from 'react';

const Ex03 = () => {

    const[ranNum, setRanNum] = useState(0)
    const[inputNum, setInputNum] = useState(0)

    const btnCk = (event) => {
        setInputNum(parseInt(event.target.innerText))
        setRanNum(parseInt(Math.random()*3+1))
    }
  return (
    <div>
        <div>
            <button onClick={btnCk}>1</button>
            <button onClick={btnCk}>2</button>
            <button onClick={btnCk}>3</button>
        </div>
    
    <div>
        내가 입력한 숫자 : {inputNum}
        <br/>
        랜덤 수 : {ranNum}
        <br/>
        {inputNum===ranNum?<p>정답입니다!</p>:<p>땡!</p>}
    </div>
    </div>
  )
}

export default Ex03