import { Button, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Table = () => {
var[names,setNames]=useState([
  {
   name:"fjgjk" ,age:56
  },{
    name:"vfjh0", age:58
  }
])

  return (
    <div>
      < Typography variant='h1'>Table</Typography><br/><br/>
      <TextField variant='outlined'  placeholder='name'></TextField><br/><br/><br/>
   <Button variant='text' color='success'>Submit</Button><br/><br/>


   <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>

        </TableRow>
      </TableHead>

      <TableBody>
        {names.map((value,index)=>{
          return(
            <TableRow>
              <TableCell key={index}>{value.name}</TableCell>

<TableCell>{value.age}</TableCell>
            </TableRow>
          )
        })}
        
      </TableBody>
    </Table>
   </TableContainer>
   
   
   
    </div>
  )
}

export default Table