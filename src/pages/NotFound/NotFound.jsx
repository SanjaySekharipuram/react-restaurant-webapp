import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const NotFound = () => {
    const CustomBox = styled(Box)(({theme})=>({
        width:'30%',
        [theme.breakpoints.down('md')]:{
            width:'85%'
        }
    }))
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            padding:'40px',
            mt:'65px',
            mb:'100px'
        }}>
            
            <div style={{
                width: '5%',
                height: '5px',
                backgroundColor: '#000339',
                margin:'0 auto'
            }}>

            </div>
            
            <Typography variant='h3' sx={{fontSize:'35px',color:'#000339',fontWeight:'bold',my:3}}>
                            404 : Page Not Found
                        </Typography>
                        <CustomBox>
                            
            <Typography variant='body2' sx={{fontSize:'16px',color:'#5a6473',fontWeight:'500',textAlign:'center'}}>
                            We could not find what you are looking for.
                        </Typography>
                        </CustomBox>
        </Box>
    )
}
export default NotFound