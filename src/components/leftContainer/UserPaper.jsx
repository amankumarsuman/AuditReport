import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import SensorsIcon from "@mui/icons-material/Sensors";
import WaterIcon from "@mui/icons-material/Water";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const CustomizedListText = styled(ListItemText)`
  color: grey;
  cursor: pointer;
`;

export default function UserPaper({handleDrawerClose}) {
  return (
    <div style={{ bottom: 0 }}>
      <Card sx={{ maxWidth: 345, background: "#ecf9ff" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#6a0af1" }} aria-label="recipe">
              AK
            </Avatar>
          }
          title="Aman Kumar"
          subheader="Credits Used:313.2"
        />

        <CardContent>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  background: "green",
                  borderRadius: "5px",
                  color: "white",
                }}
              >
                <ListItemIcon>
                  <ShoppingCartIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText color="white" primary="Change Plan" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <WaterIcon />
                </ListItemIcon>
                <CustomizedListText primary="Product Roadmap" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SensorsIcon />
                </ListItemIcon>
                <CustomizedListText primary="What's New?" />
              </ListItemButton>
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <div onClick={handleDrawerClose} style={{ display: "flex" }}>
        <ArrowBackIcon sx={{ marginRight: "0.3em" }} />
        <Typography
        
        >Collapse</Typography>
      </div>
    </div>
  );
}
