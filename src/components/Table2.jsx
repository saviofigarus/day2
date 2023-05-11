import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Table2 = () => {
    var [user,setUser]= useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) =>{
        console.log(response.data)
        setUser(response.data)
    })
    .catch((err)=>console.log(err))
    },[])
    
  return (
    <div style={{padding:"100px"}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red"}}>Name</TableCell>
                        <TableCell style={{color:"red"}}>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((value,index)=>{
                        return(
                            <TableRow key={index}>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.email}</TableCell>
                            </TableRow>
                        )

                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Table2
