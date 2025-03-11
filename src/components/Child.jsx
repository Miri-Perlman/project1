import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './Child.css';
import { useState } from 'react';

const Child= (props) =>{
    const [Name,setName]=useState("");
    const [Age,setAge]=useState("");
    const [City,setCity]=useState("");
    const [IsAdult,setIsAdult]=useState("");
    return(
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off">
        <TextField id="Name-basic" label="Name" variant="outlined" value={Name} onChange={(e)=>setName(e.target.value)} />
        <TextField id="Age-basic" label="Age" variant="outlined" value={Age} onChange={(e)=>setAge(e.target.value)}/>
        <TextField id="City-basic" label="City" variant="outlined" value={City} onChange={(e)=>setCity(e.target.value)} />
        <TextField id="IsAdult-basic" label="IsAdult" variant="outlined" value={IsAdult} onChange={(e)=>setIsAdult(e.target.value)}/>
        <br />
        <br />
        <Fab id="add" onClick={() => props.addChildFunc({ Name: Name, Age: Age ,City:City,IsAdult: IsAdult})}  size="medium" color="primary" aria-label="add">
        <AddIcon />
        <h1>hiiiiiiiiigit add .</h1>
        <h1>hi! my name is miri</h1>
      </Fab>
      </Box>   
      
    )
}
export default Child;