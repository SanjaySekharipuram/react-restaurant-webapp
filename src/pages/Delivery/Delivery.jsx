import { Box, Container, Typography, styled } from '@mui/material'
import React from 'react'
import deliveryIcon from '../../assets/DeliveryImg.png'
import CustomButton from '../../components/CustomButton/CustomButton'
const Delivery = () => {

    const CustomContainer = styled(Container)(({ theme }) => ({
        backgroundColor: '#fed801',
        height: '416px',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            height: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(3, 3, 0, 3),
            width: '90%'
        }
    }))

    const CustomBox = styled(Box)(({ theme }) => ({
        padding: theme.spacing(10, 0, 10, 0),
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down('md')]: {
            padding: '0'
        }
    }))

    return (
        <CustomBox>
            <CustomContainer>

                <Box>

                    <Typography sx={{
                        color: '#fff',
                        fontSize: '35px',
                        fontWeight: '700',
                        fontFamily: 'monospace',
                        my: 2
                    }}>
                        Super Fast Home Delivery
                    </Typography>
                    <Typography sx={{
                        color: '#000',
                        fontSize: '16px',
                        fontWeight: '800',
                        fontFamily: 'monospace',
                        my: 3
                    }}>
                        Door to Door Delivery
                    </Typography>

                    <CustomButton
                        backgroundColor='#fff'
                        color='#17275f'
                        buttonText='Order Now!'
                    />
                </Box>
                <img src={deliveryIcon} alt='delivery-icon' style={{maxWidth:'100%'}} />
            </CustomContainer>
        </CustomBox>
    )
}

export default Delivery