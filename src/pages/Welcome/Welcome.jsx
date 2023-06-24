import { Box, Container, Typography, styled } from '@mui/material'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import welcome from '../../assets/welcome.png'

function Welcome() {

    const CustomBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }
    }))

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: '64px',
        color: '#fff',
        fontWeight: 'bold',
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px'
        }
    }))
    return (
        <Box sx={{
            backgroundColor: '#fed801',
            minHeight: '80vh'
        }}>
            <Container>
                <CustomBox>
                    <Box sx={{
                        flex: '1'
                    }}>
                        <Typography variant='body2'
                            sx={{
                                fontSize: '18px',
                                color: '#687690',
                                fontWeight: '500',
                                mt: 10,
                                mb: 4
                            }}>
                            Welcome to Demo Restaurant
                        </Typography>
                        <Title variant='h1'>
                            Discover a place where you will love to eat
                        </Title>
                        <Typography variant='body2'
                            sx={{
                                fontSize: '18px',
                                color: '#5a6473',
                                my:4
                            }}>
                            Immerse yourself in the elegent ambiance as you savo each bite, accompanied by our extensive selection of hand-picked wines and carefully curated cocktails.
                        </Typography>

                        <CustomButton
                            backgroundColor='#0f1b4c'
                            color='#fff'
                            buttonText='More About Us'
                            welcomeBtn={true}
                        />
                    </Box>
                    <Box sx={{
                        flex: '1.25'
                    }}>
                        <img src={welcome} alt='welcome' style={{
                            maxWidth:'100%',
                            marginBottom:'2rem'
                        }}/>
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    )
}

export default Welcome