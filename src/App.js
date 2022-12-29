import { Box, ThemeProvider } from '@mui/system'
import './App.css';
import Search from './comp/Search'
import Data from './comp/Data'
import JobCard from './comp/JobCard';
import Header from './comp/Header';
import { CircularProgress, Dialog, Grid } from '@mui/material';
import PostJob from './comp/PostJob';
import data from './comp/Data';
import {useEffect, useState} from 'react'
import { db } from './comp/config';
import { addDoc, collection, getDocs } from 'firebase/firestore';
function App() {


  const [jobs,setjobs] =useState([]);

  const [loading,setloading] =useState(true);
  const fetchJobs= async()=>{
    const req = await db
    .collection('jobs')
    .orderBy('postedOn','desc')
    .get();
    const tempJobs=req.docs.map((job)=>(job.data()));
    console.log(tempJobs)
  }
  useEffect(()=>{
    console.log(jobs)
  },[jobs]
  )
  useEffect(()=>{
    fetch();
  },[])


  function fetch(){
    const a= collection(db,'jobs')
    getDocs(a)
    .then(response=>{
     const b=response.docs.map(doc=>({
     ...doc.data() ,id:doc.id ,postedOn:doc.data().postedOn.toDate()
     }))
     setjobs(b)
     setloading(false)
    })
    .catch(error=>console.log(error.message))
  }

  
  return (
  
  <div>
    <Header/>
   
    <Grid  container spacing={2}   justifyContent="center">
<Grid item xs={10}>


{data.map(d=>
<JobCard key={d.id} {...d}></JobCard>)
}


</Grid>
   </Grid>
  </div>
  
  );
}

export default App;
