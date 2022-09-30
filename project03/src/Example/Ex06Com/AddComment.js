import React from 'react'

const AddComment = () => {

    let group = []
    let newGroup = group.map(item => <p key={item}>{item}</p>)

  return (
    <div>
        <form action='CommentList.js'>
        <input type='text' name='data'></input>
        <input type='submit' value='+'></input>
        </form>
    </div>
  )
}

export default AddComment