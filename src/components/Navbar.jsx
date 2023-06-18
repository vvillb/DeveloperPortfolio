import React from 'react'
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const navItems = [
  { id: 1, title: 'About', path: '#about' },
  { id: 2, title: 'Contact', path: '#contact' },
  { id: 3, title: 'Sample Projects', path: '#sample-projects' },
  { id: 4, title: 'More', path: '#more' },
];

const  Navbar=()=> {
  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

const drawer = (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" sx={{ my: 2 }}>
      Virginia Villalobos
    </Typography>
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component="a" href={item.path}>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);





  return (
    <Box>
    <AppBar component="nav" sx={{backgroundColor:'highlights.main'}}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Virginia Villalobos
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block',backgroundColor:'highlights.main' } }}>
            {navItems.map((item) => (
              <Button component="a" href={item.path}  key={item.id} sx={{ color: '#fff' }}>
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{backgroundColor:'highlights.main'}}>
        <Drawer
          
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
      </Box>
  )
}

export default Navbar
