import React from 'react'


            // Case 1) 매개변수 props => props.name
            // Case 2) 객체 안의 속성 => {name}
const Menu = ({name, price}) => {
  
  return (
    <div>
        <h1>{name}</h1>

        {/*값이 들어있지 않은 경우?
        값 O => true
        값 X => false
        => 삼항연산자 이용 
        */}
        {price ? <p>{price}</p> : <p>3500원</p>}

    </div>
  )
}

export default Menu