import React from "react";
import { styled } from '@mui/material/styles';
import { Box, Button, makeStyles, MenuItem, Select, useTheme } from '@mui/material';
function Search() {
    const CButton = styled(Button)(({ theme }) => ({
        color: 'white',
        margin: '8px',
        flex: 1,
        height: '50px',
        backgroundColor: '#18E1D9',
        '&:hover': {
            backgroundColor: '#00a0b2',
        },
    }));

    return (
        <div>
            <Box sx={{
                bgcolor: '#fff',
                display: 'flex',
                mt: -5,
                mb: 2,
                boxShadow: '0px 1px 5px rgba(0,0,0,0.1)',
                borderRadius: '5px',
                p: 2,
            }} >
                <Select
                    sx={{
                        margin: '8px',
                        flex: 1,
                        height: '50px',
                    }}
                    variant="filled" disableUnderline value="Part-time">
                    <MenuItem value={'Full-Time'}>Full-Time</MenuItem>
                    <MenuItem value={'Part-time'}>Part-time</MenuItem>
                    <MenuItem value={'Internship'}>Internship</MenuItem>
                </Select>
                <Select
                    sx={{
                        margin: '8px',
                        flex: 1,
                        height: '50px',
                    }}
                    disableUnderline variant="filled" value="Work-From-Home">
                    <MenuItem value={'Work-From-Home'}>Work-From-Home</MenuItem>
                    <MenuItem value={'Work-From-Office'}>Work-From-Office</MenuItem>
                </Select>
                <CButton variant='contained'>Search</CButton>
            </Box>
        </div>
    )
}
export default Search;