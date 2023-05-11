import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Basics = () => {
  return (
    <div>
        <h1>dominic saviyo figarus</h1>
 
        <Typography variant="h1">domnic saviyo </Typography>
        <br /><br /> 
       
        <TextField label='name' variant='standard'/>
        <Button variant="text" color='secondary'>submit</Button>
        <br></br><br></br>
        <TextField label='name' variant='outlined'/>
        <Button variant="contained" color='error'> submit</Button>
        <br></br><br></br>
        <TextField label='name' variant='filled'/>
        <Button variant="outlined" color='success'>submit</Button>
        <br></br><br></br>
        

    
    </div>
  )
}

export default Basics
