import { AppBar, Avatar, Menu, MenuItem, Box, Badge, InputBase, styled, Toolbar, Typography } from '@mui/material'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")( ({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}) )

const Icons = styled(Box)( ({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{display: "flex"}
}) )

const UserBox = styled(Box)( ({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{display: "none"}
}) )

const Navbar = () => {

  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display: {xs:"none", sm:"block"}}}>IMON DEV</Typography>  
        <CloudDownloadIcon sx={{display: {xs:"block", sm:"none"} }}/>
        <Search><InputBase placeholder='search'></InputBase></Search>
        <Icons>
          <Badge 
            badgeContent={4}
            color="error"
          >
          <Mail />
          </Badge>
           <Badge 
            badgeContent={4}
            color="error"
          >
          <Notifications />
          </Badge>
          <Avatar sx={{width: 30, height: 30}} src="https://avatars.githubusercontent.com/u/8582372?s=96&v=4"
          onClick={e=>setOpen(true)}/>
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
           <Avatar sx={{width: 30, height: 30}} src="https://avatars.githubusercontent.com/u/8582372?s=96&v=4"/>
          <Typography variant='span'>Imon </Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Navbar