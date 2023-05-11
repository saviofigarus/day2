import { Button, Typography ,TextField} from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
  var[ pname,setPname ] = useState("class");
  var[data,setData] =useState()
  const changeName = ()=>{
    console.log("clicked");
    setPname("xyz")
  }
  const readValue =(e)=>{
    setData (e.target.Value);
    console.log(data)
  }
  return (
    <div>
      <Typography variant='h1'> Welcome {pname} </Typography><br></br>
      <TextField label1='name' variant='outlined' onChange={readValue}/>
   
      <Button variant='text' onClick={changeName}>click here</Button>
      </div>
  )
}

export default StateBasics