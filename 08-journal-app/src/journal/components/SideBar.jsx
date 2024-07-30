import {
  HomeOutlined,
  LibraryBooksOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box sx={{ width: drawerWidth, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: `${drawerWidth}px`,
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Jorge Vela
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LibraryBooksOutlined />
            </ListItemIcon>
            <ListItemText primary="Journal" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsOutlined />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
