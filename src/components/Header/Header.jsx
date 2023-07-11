import React, { useState } from 'react'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from '@mui/material'
import CustomButton from '../CustomButton/CustomButton'
import havanaLogo from '../../assets/havana_logo.png'
import MenuIcon from '@mui/icons-material/Menu'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import HomeIcon from '@mui/icons-material/Home'
import ContactsIcon from '@mui/icons-material/Contacts'
import { useNavigate } from 'react-router-dom'

function Header() {

    const handleClick = ()=>{
        window.open('https://github.com/SanjaySekharipuram','_blank')
    }
    const [mobileMenu, setMobileMenu] = useState({ left: false })
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type == 'keydown' && event.type === 'Tab' || event.type === 'Shift') {
            return;
        }
        setMobileMenu({ ...mobileMenu, [anchor]: open })
    }

    const list = (anchor) => (
        <Box sx={{
            width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250
        }}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <List>

                {
                    nav_titles.map((item, index) => (
                        <ListItem key={index} disablePadding onClick={()=>navigate(item.path)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {
                                        item.icon
                                    }
                                </ListItemIcon>
                                <ListItemText primary={item.display} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }

            </List>
        </Box>
    )

    const navigate = useNavigate()

    const nav_titles = [{
        path: '/',
        display: 'Home',
        icon:<HomeIcon/>
    },
    {
        path: '/dishes',
        display: 'Dishes',
        icon:<FeaturedPlayListIcon/>
    },
    {
        path: '/services',
        display: 'Services',
        icon:<MiscellaneousServicesIcon/>
    },
    {
        path: '/about-us',
        display: 'About Us',
        icon:<ContactsIcon/>
    }
    ]

    const NavBarLinksBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }))
    const NavBarLink = styled(Typography)(() => ({
        fontSize: '15px',
        color: '#4f5361',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff'
        }
    }))

    const NavBarLogo = styled('img')(({ theme }) => ({
        width:'75px',
        height:'25',
        objectFit: 'cover',
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }))
    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: 'pointer',
        display: 'none',
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
    }))

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '40px',
            maxWidth: 'auto',
            backgroundColor: '#fed801',
            marginLeft: '0px',
            marginBottom: '-24px'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2.5rem'
            }}>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>

                    <CustomMenuIcon onClick={toggleDrawer('left', true)} />
                    <Drawer
                        anchor='left'
                        open={mobileMenu['left']}
                        onClose={toggleDrawer('left', false)}>
                        {
                            list('left')
                        }
                    </Drawer>
                    <NavBarLogo  onClick={handleClick} src={havanaLogo} alt='logo' />
                </Box>

                <NavBarLinksBox>
                    {
                        nav_titles.map((nav_title) => (
                            <NavBarLink variant='body2' onClick={()=>navigate(nav_title.path)}>{nav_title.display}</NavBarLink>
                        ))
                    }
                </NavBarLinksBox>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'
            }}>
                <NavBarLink variant='body2'>Sign Up</NavBarLink>
                <CustomButton
                    backgroundColor='#0f1b4c'
                    color='#fff'
                    buttonText='Register'
                />

            </Box>
        </Box>
    )
}

export default Header