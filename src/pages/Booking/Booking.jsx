import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import buyIcon from '../../assets/buy_icon.png'
import sellIcon from '../../assets/sell_icon.png'
import CustomButton from '../../components/CustomButton/CustomButton'
const Booking = () => {
    const CustomBox = styled(Box)(({theme}) => ({
        width:'30%',
        [theme.breakpoints.down('md')]:{
            width:'80%'
        }
    }))

    const GuidesBox = styled(Box)(({theme}) => ({
        display:'flex',
        justifyContent:'space-around',
        width:'70%',
        marginTop:theme.spacing(5),
        marginBottom:theme.spacing(5),
        [theme.breakpoints.down('md')]:{
            width:'100%'
        },
        [theme.breakpoints.down('sm')]:{
            marginBottom:'0',
            flexDirection:'column',
        }

    }))

    const GuideBox = styled(Box)(({theme}) => ({
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:theme.spacing(5),
        [theme.breakpoints.down('sm')]:{
            margin:theme.spacing(2,0,2,0)
        }
    }))

    const bookingsContent = [
        {
            title:'Order Guides',
            subTitle:'How to order',
            logo:buyIcon
        },
        {
            title:'Booking Guides',
            subTitle:'How to Book',
            logo:sellIcon
        },
        {
            title:'Payment Guides',
            subTitle:'Payment Methods',
            logo:sellIcon
        }
    ]
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            padding:'40px'
        }}>
            
            <div style={{
                width: '5%',
                height: '5px',
                backgroundColor: '#000339',
                margin:'0 auto'
            }}>

            </div>
            <Typography variant='h3' sx={{
                fontSize:'35px',
                fontWeight:'bold',
                color:'#000339',
                my:3
            }}>
                How to Book ?
            </Typography>
            <CustomBox>
                <Typography variant='body2' sx={{
                    fontSize:'16px',
                    fontWeight:'500',
                    color:'#5a6473',
                    textAlign:'center'
                }}>
                    Everything is you need to know when you book for advance slot
                </Typography>
            </CustomBox>

            <GuidesBox>
                {
                    bookingsContent.map((item,index)=>(
                        <GuideBox key={index}>
                            <img src={item.logo} alt='icon'/>
                            <Typography variant='body2' sx={{
                                fontWeight:'500',
                                fontSize:'20px',
                                color:'#3b3c45',
                                my:1
                            }}>
                                {item.title}
                            </Typography>
                            <Box sx={{
                                cursor:'pointer',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Typography variant='body2' sx={{
                                    fontWeight:'bold',
                                    fontSize:'14px',
                                    color:'#0689ff'
                                }}>
                                {item.subTitle}
                                </Typography>
                                <ArrowRightAltIcon style={{color:'#0689ff'}}/>
                            </Box>
                        </GuideBox>

                    ))
                }






            </GuidesBox> 
            <CustomButton
                    backgroundColor='#0f1b4c'
                    color='#fff'
                    buttonText='See Full Guides'
                    guideBtn={true}
                />
        </Box>
    )
}

export default Booking