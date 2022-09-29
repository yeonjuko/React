import React from 'react'
import Member from './Components/Member'
import './App.css';


const AppExample = () => {
    const welStyle = {
        fontFamily : 'Cafe24Ssurround',
        fontSize : '20px',
        color : 'gray',
        backgroundColor : 'lightblue'
      }

      let team = '팀'

  return (
    <div style={welStyle} >
        <Member teamName={team} memberName="고연주"></Member>
        <Member teamName={team} memberName="임아해"></Member>
        <Member teamName={team} memberName="주상민"></Member>
        <Member teamName={team} memberName="마준호"></Member>
    </div>
  )
}

export default AppExample;