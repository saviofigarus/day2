import { TextField } from "@mui/material"
import React, { useState } from 'react'

const Eg2 =() => {
    var[val,setVal] = useState({id:'',age:''});
    const inputHandler =(e)=>{
        const{name,Value} =e.target 
        setVal1((val1)=>({...val,[name]:value}))
    }
    
    }
    return (
        <div>
        <TextField variant='outlined' label='name' name = 'id'  value= {val.id} onChange={inputHandler}></TextField>
        <TextField variant='outlined' label=
        <TextField variant='standard label= 'place' name='place' value={val.place} onChange={inputHandler}></TextField>


        
        </div>
    )
}
export default Eg2