import React from 'react'
 
const Progress_bar = ({progress}) => {
    
    const Parentdiv = {
        height: 30,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
      }
     
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: progress > 80 ? "red" : "green",
       borderRadius:40,
        textAlign: 'right'
      }
     
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
       
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
 
export default Progress_bar;