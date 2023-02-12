import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.png";
import { styled } from "@mui/material/styles";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ExtensionIcon from "@mui/icons-material/Extension";
import LayersIcon from "@mui/icons-material/Layers";
import RightContainerBreadcrumbs from "./Breadcrumb";
import usaFlag from "../assets/usa.png";
import DataGridTable from "../rightContainer/DataGrid";
import data from "../assets/data.json";
import { Collapse } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CircleIcon from "@mui/icons-material/Circle";
import UserPaper from "./UserPaper";
const drawerWidth = 240;

//customized css of list
const CustomizedListText = styled(ListItemText)`
  color: grey;
  cursor:pointer;


  
   & .MuiListItemText-secondary {
                color: black;
                font-weight: bold;
                
              },
`;

function LeftDrawer(props) {
  const { window } = props;

  //state for mobile view
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //function to handle drawer while screen is in mobile view
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //state for nested drawer
  const [open, setOpen] = React.useState(true);
  const [openTemplate, setOpenTemplate] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleTemplateClick = () => {
    setOpenTemplate(!openTemplate);
  };


  // handle drawer


  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  //left drawer
  const drawer = (
    <div 
    openDrawer={openDrawer}
    >
      <img src={logo} alt="logo" width="90%" />
      <Divider />
      <List>
        <ListItem sx={{ background: "#D3D3D3" }} disablePadding>
          <ListItemButton>
            <CustomizedListText
              primary="Project"
              secondary="My First Project"
            />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Recipes" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider variant="middle" />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NewspaperIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleTemplateClick}>
            <ListItemIcon>
              <ExtensionIcon />
            </ListItemIcon>
            <ListItemText primary="Templates" />
          </ListItemButton>
        </ListItem>
        <Collapse in={openTemplate} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <FavoriteBorderIcon />
              </ListItemIcon>
              <ListItemText primary="Favourite" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openTemplate} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary="Custom Template" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocalFireDepartmentIcon />
              </ListItemIcon>
              <ListItemText primary="Semrush" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <UserPaper handleDrawerClose={handleDrawerClose} />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex",marginTop:"3em" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "white",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <RightContainerBreadcrumbs />
          </Typography>
        </Toolbar>

        <Typography sx={{ color: "grey", marginLeft: "1em" }} variant="h5">
          <span style={{ color: "black", fontWeight: "bold" }}>Keyword :</span>
          {data?.topic}
        </Typography>
        <Typography sx={{ color: "grey", marginLeft: "1em" }} variant="h6">
          Database: {data?.country}
          <img src={usaFlag} alt="usa flag" width="1.5%" />
        </Typography>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div style={{ width: "90%", margin: "auto" }}>
          <DataGridTable data={data} />
        </div>
      </Box>
    </Box>
  );
}

LeftDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default LeftDrawer;
