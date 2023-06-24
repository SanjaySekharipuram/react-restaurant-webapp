import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import likeIcon from '../../assets/like.png'
import shareIcon from '../../assets/share.png'
import heartIcon from '../../assets/heart.png'
const CustomCard = ({ key, img, price, item, likes, heart, share }) => {

    const DishBox = styled(Box)(({ theme }) => ({
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        maxWidth: 350,
        backgroundColor: '#fff',
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(2, 0, 2, 0)
        },
        '&:hover': {
            backgroundColor: '#f5f5f5',
            boxShadow: '0 0 5px rgba(0,0,0,.2)',
            transform: 'scale(1.05)',
            transition: 'all .3s ease-in-out'
        }
    }))

    const InfoBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }))

    const ImgContainer = styled(Box)(({ theme }) => ({
        width: '100%'
    }))

    return (
        <DishBox key={key}>
            <ImgContainer>
                <img src={img} alt='food' style={{ maxWidth: '100%' }} />
            </ImgContainer>
            <Box sx={{ padding: '1rem' }}>
                <Typography variant='body2' sx={{ fontWeight: '700' }}>
                    ${price}
                </Typography>
                <Typography variant='body2' sx={{ my: 2 }}>
                    {item}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <InfoBox>
                        <img src={likeIcon} alt='like-icon' />
                        <Typography variant='body2' sx={{ mt: 1 }}>
                            {likes}
                        </Typography>
                    </InfoBox>
                    <InfoBox>
                        <img src={heartIcon} alt='heart-icon' />
                        <Typography variant='body2' sx={{ mt: 1 }}>
                            {heart}
                        </Typography>
                    </InfoBox>
                    <InfoBox>
                        <img src={shareIcon} alt='share-icon' />
                        <Typography variant='body2' sx={{ mt: 1 }}>
                            {share}
                        </Typography>
                    </InfoBox>
                </Box>

            </Box>

            {/* <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            </Box> */}
        </DishBox>

    )
}

export default CustomCard