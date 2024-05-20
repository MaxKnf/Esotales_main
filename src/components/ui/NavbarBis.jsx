import "./NavbarBis.css"
import * as React from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const linkList = [
    {
      name: "Home",
      link: '/'
    },
    {
      name: 'Classes',
      link: '/classes'
    },
    {
      name: "Guides",
      link: '/guides'
    },
    {
      name: 'News',
      link: '/news'
    },
    {
      name: 'Gallery',
      link: '/gallery'
    }
  ]

  const DrawerList = (
    <Box className="drawer" sx={{ width: 300 }} role="navigation" onClick={toggleDrawer(false)}>
      <List>
        {linkList.map((item, index) => (
          <ListItem key={index} disablePadding>
             <ListItemButton key={index} disablePadding component="a" href={item.link}>
            {item.name}
          </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
    </Box>
  );

  return (
    <div className='navigation'>
      <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Link to="/" className='title' >
        EsoTales
      </Link>
      <Drawer  open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
