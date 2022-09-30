import React from 'react'
import { useState } from 'react';

const Ex02 = () => {

    const [likeTxt, setLikeTxt] = useState('좋아요')
    const [likeEmoji, setLikeEmoji] = useState('❤')
    const handleLike = () =>{
        likeTxt == '좋아요'?setLikeTxt('좋아요 취소'):setLikeTxt('좋아요')
        likeEmoji == '❤'?setLikeEmoji('💕'):setLikeEmoji('❤')
    }

    const [num, setNum] = useState(0)
    const increase = () =>{
        setNum(num+1)
    }
    const decrease = () =>{
        num>0&&setNum(num-1)
    }
  return (
    <div>
        <p>{likeEmoji} {num}</p>
        <br/>
        <button onClick={handleLike}>{likeTxt}</button>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
    </div>
  )
}

export default Ex02