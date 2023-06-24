import { Box, Container, Typography, styled } from '@mui/material'
import React from 'react'
import fbIcon from '../../assets/facebook.png'
import twitterIcon from '../../assets/twitter.png'
import instagramIcon from '../../assets/instagram.png'

const Footer = () => {

    
        const IconBox = styled(Box)(({theme})=>({
            display:'flex',
            alignItems:'center',
            gap:'1rem',
            [theme.breakpoints.down('sm')]:{
                justifyContent:'center',
            }
        }))

    const footerDatas = [
        {
            footerLink:['Guides','Services','Contact us'],
            footerTitle:'Featured',
            component:''
        },
        {
            footerLink:['Location','Parterships','Terms of use & Privacy Policies'],
            footerTitle:'Overview',
            component:''
        },
        {
            footerLink:['Keep in touch with our social media pages'],
            footerTitle:'Get In Touch',
            component:
            <IconBox>
                <img src={fbIcon} alt='' style={{cursor:'pointer'}}/>
                <img src={twitterIcon} alt='' style={{cursor:'pointer'}}/>
                <img src={instagramIcon} alt='' style={{cursor:'pointer'}}/>
            </IconBox>
        }
    ]
    const CustomContainer = styled(Container)(({ theme }) => ({
        display:'flex',
        justifyContent:'space-around',
        gap:theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            textAlign: 'center'
        }
    }))

    const FooterLInk = styled('span')(({theme})=>({
        fontSize:'16px',
        color:'#000066',
        fontWeight:'300',
        cursor:'pointer',
        '&:hover':{
            color:'#66b2ff'
        }

    }))
    
    return (
        <Box sx={{ py: 10, backgroundColor: '#fff682', }}>
            <CustomContainer>

            {
                footerDatas.map((item,index)=>(
                    // alert(index),
                    <Box key={index}>
                        <Typography
                        sx={{
                            fontSize:'20px',
                            color:'#1c1c1d',
                            fontWeight:'700',
                            mb:2
                        }}>
                            {item.footerTitle}
                        </Typography>

                        {
                            (index === 0 || index === 1) && item.footerLink.map((data)=>(
                                <>
                                <FooterLInk>{data}</FooterLInk><br/>
                                </>
                            ))
                        }
                        {
                            index === 2 && 
                            item.footerLink.map((data)=>(
                                <>
                            <Typography
                            sx={{
                                fontSize:'16px',
                                color:'#7a7a7e',
                                fontWeight:'500',
                                mb:2
                            }}>
                                {data}
                            </Typography>
                                </>
                            ))
                        }
                        {item.component}

                        {/* <FooterLInk>contact</FooterLInk><br/>
                        <FooterLInk>about</FooterLInk><br/> */}
                        {/* <IconBox>
                            <img src={instagramIcon} alt='' style={{cursor:'pointer'}}/>
                            <img src={instagramIcon} alt='' style={{cursor:'pointer'}}/>
                            <img src={instagramIcon} alt='' style={{cursor:'pointer'}}/>
                            <img src={instagramIcon} alt='' style={{cursor:'pointer'}}/>
                        </IconBox> */}
                    </Box>
                ))
            }










                {/* <Box>
                    <Typography
                    sx={{
                        fontSize:'20px',
                        color:'#1c1c1d',
                        fontWeight:'700',
                        mb:2
                    }}>
                        Featured
                    </Typography>
                    <FooterLInk>services</FooterLInk><br/>
                    <FooterLInk>contact</FooterLInk><br/>
                    <FooterLInk>about</FooterLInk><br/>
                    <IconBox>
                        <img src={instagramIcon} alt='' style={{cursor:'pointer'}}/>
                        <img src={instagramIcon} alt='' style={{cursor:'pointer'}}/>
                        <img src={instagramIcon} alt='' style={{cursor:'pointer'}}/>
                        <img src={instagramIcon} alt='' style={{cursor:'pointer'}}/>
                    </IconBox>
                </Box> */}
            </CustomContainer>
        </Box>
    )
}

export default Footer