import { Box, Container, Typography, styled } from '@mui/material'
import React from 'react'
import { Data } from '../../StaticData/Data'
import CustomCard from '../../components/CustomCard/CustomCard'

const Dishes = () => {
    
    const DishesBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems:'center'
        }

    }))

    const PropertiesTextBox = styled(Box)(({theme})=>({
        [theme.breakpoints.down('md')]:{
            textAlign:'center'
        }
    }))

    return (
        <Box sx={{ mt:5, backgroundColor:'#f5fafe',py:10}}>
            <Container>
                <PropertiesTextBox>
                <Typography sx={{
                    color: '#000339',
                    fontSize: '35px',
                    fontWeight: 'bold',
                    ml: '13px'
                }}>
                    Featured Dishes
                </Typography>
                    <Typography sx={{
                        color: '#5a6473',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        mt:1,
                        ml: '13px'
                    }}>
                        Everything is you need to know when you book for advance slot
                    </Typography>
                </PropertiesTextBox>
                <DishesBox>
                    {
                        Data.map((foodItem)=>(
                            <CustomCard
                            key={foodItem.id}
                            img={foodItem.img}
                            price={foodItem.price}
                            item={foodItem.item}
                            likes={foodItem.likes}
                            heart={foodItem.heart}
                            share={foodItem.share}/>
                        ))
                    }
                </DishesBox>
            </Container>
        </Box>
    )
}

export default Dishes