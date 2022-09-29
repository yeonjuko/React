import React from 'react'


            // Case 1) 매개변수 props => props.name
            // Case 2) 객체 안의 속성 => {name}
// 매개변수로 object 를 적을 때 주의!
// 1) ({속성}) => 중괄호 생략 금지!
// 2) 다중 속성을 가져올 때
        // ({속성},{속성}) => XXXXXX금지!
        // ({속성, 속성}) => OOOOOO 하나의 객체 안에 다중 속성



        const Member = ({teamName,memberName}) => {

  return (

    <div align="center">
        <h2>{teamName}</h2>
        <h4>{memberName}</h4>
        <hr></hr>
    </div>
  )
}

export default Member;