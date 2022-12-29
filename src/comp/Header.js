import React from "react";
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Typography, Button } from '@mui/material';
function Header() {

    const CButton = styled(Button)(({ theme }) => ({
        color: 'white',
        backgroundColor: '#18E1D9',

        '&:hover': {
            backgroundColor: '#00a0b2',
        },
    }));
    return (
        <div>
            <Box
                sx={{
                    bgcolor: '#0B0B15',
                    boxShadow: 1,
                    px: 2,
                    py: 10,
                    color: 'white',
                    borderRadius: 2,
                    minWidth: 300,
                }}>
                <Grid  container spacing={2}   justifyContent="center">
                <Grid item xs={10}>
                <Box display='flex' justifyContent='space-between'>
                <Typography variant='h4'>Open Job Listing</Typography>
               
                </Box>
                </Grid>
                </Grid>
            </Box>
        </div>



    )
}
export default Header;