import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { differenceInHours } from 'date-fns'
const JobCard = (props) => {
    return (
        <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            transition:'.3s',
            my:3,
            border: '1px solid e8e8e8',
            "&:hover":{
                boxShadow:' 0px 5px 25px rgba(0,0,0,0.1)',
                borderLeft:'6px solid #4D64E4',
            },
           
            borderRadius: 2,
            p: 2,
            
            cursor:'pointer',
        }}
        >
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography variant='subtitle1'>
                        {props.title}
                    </Typography>
                    <Typography sx={{
                        fontSize: 13.5,
                        fontWeight: 600,
                        bgcolor: '#18E1D9',
                        boxShadow: 1,
                        borderRadius: 5,
                        display: 'inline-block',
                        p: 2,
                        my:2,
                        minWidth: 300,
                    }} variant='subtitle1'>
                        {props.companyName}
                    </Typography>
                </Grid>
                <Grid 

                item container xs>
                    {props.skills.map(skil => <Grid sx={{
                        fontSize: '18px',
                        fontWeight: 500,
                        color:'white',
                        margin:0.5,
                        p:0.75,
                        borderRadius: 3,
                        bgcolor: '#0B0B15',
                        
                    }}
                    key={skil} item>{skil}</Grid>)}
                </Grid>
                <Grid item container xs direction='column' alignItems='flex-end'>
                    <Grid item>
                        <Typography variant='caption'>
                            {props.type} | {props.location}
                        </Typography>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Box>
    )

}
export default JobCard