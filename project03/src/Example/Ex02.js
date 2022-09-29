import React from 'react'
import { useState } from 'react';
import dogPic from './img/pic.jpg'

const Ex02 = () => {

    // 1. '좋아요' 버튼 클릭 시, 버튼의 내용이 '좋아요 취소'로 변경
    //    '좋아요 취소' 버튼 클릭 시, 버튼의 내용이 '좋아요'로 변경
    
    // 2. '좋아요' 버튼 클릭 시, 비어있는 하트가 꽉찬 하트로 변경
    //    '좋아요 취소' 버튼 클릭 시, 꽉찬 하트가 비어있는 하트로 변경
    
    const [likeTxt, setLikeTxt] = useState('좋아요')
    const [likeEmoji, setLikeEmoji] = useState('♡')
    const handleLike = () =>{
        likeTxt == '좋아요'?setLikeTxt('좋아요 취소'):setLikeTxt('좋아요')
        likeEmoji == '♡'?setLikeEmoji('♥'):setLikeEmoji('♡')
    }


    // 3. '+1' 버튼 클릭 시, 숫자가 1씩 증가
    const [num, setNum] = useState(0)
    const increase = () =>{
        setNum(num+1)
    }
    const decrease = () =>{
        num>0&&setNum(num-1)
    }
    
    // 4. '-1' 버튼 클릭 시, 숫자가 1씩 감소(단, 0 밑으로는 내려가지 않도록!)
    
    // 완료 시, 꽉찬하트로 좋아요 5개 만들어서 캡쳐

  return (
    <div>
        {/* 이미지, 좋아요 버튼, +1 버튼, -1 버튼 */}
        <img 
        width="350px"
        src={dogPic}>
        </img>
        <p>{likeEmoji} {num}</p>
        <br/>
        <button onClick={handleLike}>{likeTxt}</button>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
    </div>
  )
}

export default Ex02