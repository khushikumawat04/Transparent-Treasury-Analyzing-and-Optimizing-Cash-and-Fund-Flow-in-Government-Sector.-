import React, { useEffect, useState } from 'react'

const Datetime = () => {
    const[clockstate, setClockstate]=useState();
    const[datestate, setDatestate]=useState();
    useEffect(()=>{
        setInterval(()=>{
            const date = new Date();
            setClockstate(date.toLocaleTimeString())
            setDatestate(date.toDateString())
        },1000)
    },[])
  return (
    <div>
      <p>{clockstate} {datestate}</p>
     
    </div>
  )
}

export default Datetime;

// var displaytodaysdate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear()