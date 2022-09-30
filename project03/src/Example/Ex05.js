import React from 'react'
import PhotoCard from './Ex05Com/PhotoCard'

const Ex05 = () => {

    // 조건1) Ex05Com 폴더 => PhotoCard.js 컴포넌트 사용!
    // 조건2) member라는 배열 안에 name과 url 주소가 포함된 객체들을 생성
    // 조건3) 배열에 값을 추가하면 바로 새로운 카드들이 생기게 할 것

let photo = [{
    name : '제니',
    url : 'https://i.ytimg.com/vi/5uLKIlCcjk0/maxresdefault.jpg'
},{
    name : '원영',
    url : 'https://pbs.twimg.com/media/EqvYZ8MVoAAra1B.jpg'
},{
    name : '설윤',
    url : 'https://blog.kakaocdn.net/dn/dOyqeI/btrxKihIaes/AYB1WlRk0ucoFBGz8IxkiK/img.jpg'
}]


let container = {
    display : 'flex',
    flexDirection : 'row'
}

  return (
    <div style={container}>
          {photo.map(item => (<PhotoCard key={item.name} item={item}></PhotoCard>))}

    </div>
  )
}

export default Ex05