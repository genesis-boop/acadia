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
import LaptopRoundedIcon from "@mui/icons-material/LaptopRounded";
import Typography from "@mui/material/Typography";
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
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h4">Acadia</Typography>
        <List>
          <Link to="/">
            <ListItem key="Dashboard" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/add-todo">
            <ListItem key="Tasks" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TaskAltRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Tasks" />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem key="Notes" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NotesRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Notes" />
            </ListItemButton>
          </ListItem>
          <ListItem key="Focus" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LaptopRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Focus Session" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default PermanentDrawerLeft;
