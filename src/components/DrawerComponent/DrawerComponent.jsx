import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";
import Typography from "@mui/material/Typography";
import "@fontsource/rubik/900.css";
import "@fontsource/space-grotesk/400.css";
import "./DrawerComponent.css";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderWidth: 0,
            background:
              "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
            justifyContent: "center",
            fontFamily: "Space Grotest, sans-serif",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h4" sx={{ fontFamily: "Rubik, sans-serif" }}>
          ACADIA
        </Typography>
        <List>
          <ListItem key="Dashboard" disablePadding component={Link} to="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="DASHBOARD" sx={{ color: "black" }} />
            </ListItemButton>
          </ListItem>
          <ListItem key="Tasks" disablePadding component={Link} to="/todo">
            <ListItemButton>
              <ListItemIcon>
                <TaskAltRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="TASKS" sx={{ color: "black" }} />
            </ListItemButton>
          </ListItem>
          <ListItem key="Notes" disablePadding component={Link} to="/notes">
            <ListItemButton>
              <ListItemIcon>
                <NotesRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="NOTES" sx={{ color: "black" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default PermanentDrawerLeft;
