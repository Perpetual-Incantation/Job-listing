import { Dialog,styled, MenuItem, Select,Typography, DialogContent, DialogTitle ,FilledInput,Grid, DialogActions, Button ,IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { db } from './config';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import {VscChromeClose} from 'react-icons/vsc'

const PostJob=(props)=>{
    
    const skills=[
        "Javascript",
        "React",
        "Node",
        "Vue",
        "Firebase",
        "MongoDB",
        "SQL",
    ];
    const DBox = styled(Box)({
        
        
      });
   
      
    const addrem = (skill,idx) =>{
        let selected= document.getElementsByClassName(idx)[0]
console.log('background color is, ',selected.style["background-color"])
        if(  selected.style["background-color"]==="yellow"){
            selected.style["background-color"] = "white";
           
        }else{
           
            selected.style["background-color"] = "yellow";
        }


console.log(selected[0].style["color"] )

        details.skills.includes(skill)?
        setdetails(oldState=> ({
            ...oldState,
            skills:oldState.skills.filter((s)=>s !== skill),
        }))
        :
        setdetails(oldState =>({
            ...oldState, 
            skills:oldState.skills.concat(skill),
        }))
    }
    
    const [details,setdetails]=useState({
        title:"",
        type: "",
        location: "",
      companyName: "",
      companyUrl: "",
      skills: [],
      link: "",
    })
    const coll= collection(db,'jobs')
    addDoc(coll,{...details
    })
    .then(response=>{
      console.log(response)
    })
    .catch(error=>{
      console.log(error.message)
    })
    const handleSubmit =()=>{
        props.coll(details);
    }
    const handleChange = e=>{
        e.persist();
        setdetails(oldState =>({...oldState, 
            [e.target.name] : e.target.value,
        }));
    };
    const CButton = styled(Button)(({ theme }) => ({
        color: 'white',
        backgroundColor: '#18E1D9',
        borderRadius:10,
        '&:hover': {
            backgroundColor: '#00a0b2',
        },
    }));
  
    console.log(details)
    return(
       <Dialog open={true} fullWidth>
        <DialogTitle>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
            Post A Job
            <IconButton>
                <VscChromeClose/>
            </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <Grid container spacing={2}>
            <Grid item xs={6}>
            <FilledInput 
             onChange={handleChange}
            name="title"
            value={details.title}
            autoComplete="off"
             placeholder="Job Title *" 
             disableUnderline/>
            </Grid>
            <Grid item xs={6}>
            <Select
             onChange={handleChange}
             name="type"
            value={details.type}
            defaultValue='Part-Time'
             fullWidth variant="filled" disableUnderline >
                    <MenuItem value={'Full-Time'}>Full-Time</MenuItem>
                    <MenuItem value={'Part-time'}>Part-time</MenuItem>
                    <MenuItem value={'Internship'}>Internship</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange}
             name="companyName"
            value={details.companyName}
            autoComplete="off"
             placeholder="Company Name" disableUnderline/>
            </Grid>
            <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange}
             name="companyUrl"
            value={details.companyUrl}
            autoComplete="off"
             placeholder="Company URL" fullWidth disableUnderline/>
            </Grid>
            <Grid item xs={6}>
            <Select
            onChange={handleChange}
             name="location"
            value={details.location}
             fullWidth disableUnderline variant="filled" >
                    <MenuItem value={'Work-From-Home'}>Work-From-Home</MenuItem>
                    <MenuItem value={'Work-From-Office'}>Work-From-Office</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange}
             name="link"
            value={details.link}
            autoComplete="off"
             placeholder="Job Link" fullWidth disableUnderline/>
            </Grid>
            <Grid item xs={12}>
            <FilledInput 
            onChange={handleChange}
             name="description"
            value={details.description}
            autoComplete="off"
             placeholder="Job Description" fullWidth multiline rows={3} disableUnderline/>
            </Grid>
            </Grid>
            <Box mt={2}>
                <Typography>Skills</Typography>
                <Box display="flex">
                    {skills.map((s,idx)=>
                    <Box className={idx+1}
                    onClick={() => addrem(s,idx+1)}
                    sx={{
                        fontSize: '18px',
                        fontWeight: 500,
                        color:'#0B0B15',
                        margin:0.5,
                        backgroundColor:'white',
                        p:0.75,
                        border:'1px solid #0B0B15',
                        cursor:'pointer',
                        borderRadius: 3,
                        '&:hover':{
                            color:'red',
                        }
                       
                       

                    }}
                   
                    key={s}>{s} </Box>
                    )}
                </Box>
            </Box>
        </DialogContent>
        <DialogActions>
            <Box 
            sx={{
                color:'red',
        width:'100%',
        display:'flex',
        alignItems:'center', 
          justifyContent:'space-between'
            }}
           >
                <Typography variant="caption">*Required Fields</Typography>
                <CButton onClick={coll} >Post a Job</CButton>
            </Box>
        </DialogActions>
       </Dialog>
    )
}
export default PostJob