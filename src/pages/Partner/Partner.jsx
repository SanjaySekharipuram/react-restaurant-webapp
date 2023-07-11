import { Box, Container, Typography, styled } from '@mui/material'
import React from 'react'
import havanaLogo from '../../assets/havana_logo.png'
import starLogo from '../../assets/Star.png'
import parntersLogo from '../../assets/logos.png'

const Partner = () => {

    const handleClick = ()=>{
        window.open('https://github.com/SanjaySekharipuram','_blank')
    }
    const CustomContainer = styled(Container)(({theme})=>({
        display:'flex',
        justifyContent:'space-between',
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            alignItems:'center',
            textAlign:'center',
            marginBottom:theme.spacing(4)
        }
    }))

    const CustomBox = styled(Box)(({theme})=>({
        [theme.breakpoints.down('md')]:{
            marginBottom:theme.spacing(4)
        }
    }))

    return (
        <Box sx={{mt:10}}>
            <CustomContainer>
                <CustomBox>
                    <img src={havanaLogo} alt='logo' style={{maxWidth:'30%',cursor:'pointer'}} onClick={handleClick}/>
                    <Typography variant='body2' sx={{
                        color:'#7d8589',
                        fontSize:'14px',
                        fontWeight:'bold',
                        mt:2
                    }}>
                        More than 45,000 trust users
                    </Typography>
                </CustomBox>
                <Box>
                    <img src={starLogo} alt='star-logo' style={{maxWidth:'100%'}}/>
                    <Typography variant='body2' sx={{
                        color:'#7d8589',
                        fontSize:'16px',
                        fontWeight:'bold',
                        mt:2
                    }}>
                        5-star Rating (2k+ Reviews)
                    </Typography>

                </Box>
            </CustomContainer>
            <Container sx={{
                display:'flex',
                flexDirection:'column'
            }}>
                <img src={parntersLogo} alt='parnters-logo'/>
            </Container>
        </Box>
    )
}

export default Partner