import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import LogoDashboard from "./logo";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../../context/authcontext";
import { useRouter } from "next/router";
import Badge from "@mui/material/Badge";
import { red } from "@mui/material/colors";

const drawerWidth = 240;

export default function DashboardLayout({ children }) {
  const { SignUserOut } = useAuth();
  const router = useRouter();

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          color: "white",

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#283240",
            color: "#fff",
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <LogoDashboard />
        </Toolbar>

        <Box
          sx={{
            flexGrow: 1,
            margin: "2rem 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <List>
            {[
              {
                text: "Import Blog",
                icon: <SimCardDownloadIcon color='primary' />,
                onClick: () => {
                  router.push("/dashboard/importblog");
                },
              },
              {
                text: "Schedule",
                icon: <ScheduleIcon color='primary' />,
                onClick: () => {
                  router.push("/dashboard/scheduledpost");
                },
              },
              {
                text: (
                  <Badge badgeContent={"WIP"} color='error'>
                    Write Blog{" "}
                  </Badge>
                ),
                icon: <BorderColorIcon color='primary' />,
                onClick: () => {
                  router.push("/dashboard/importblog");
                },
              },
              {
                text: (
                  <Badge badgeContent={"WIP"} color='error'>
                    Analytics
                  </Badge>
                ),
                icon: <TrendingUpIcon color='primary' />,
                onClick: () => {
                  router.push("/dashboard/importblog");
                },
              },
            ].map((item, index) => (
              <ListItem
                button
                key={index}
                sx={{ margin: "1rem 0" }}
                onClick={item.onClick}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <List>
            {[
              {
                text: "Setting",
                icon: <SettingsIcon color='primary' />,
                onClick: () => {
                  router.push("/dashboard/setting");
                },
              },
              {
                text: "Info",
                icon: <InfoIcon color='primary' />,
                onClick: () => {
                  router.push("https://blog.blogtiple.com");
                },
              },
              {
                text: "Logout",
                icon: <LogoutIcon color='primary' />,
                onClick: () => {
                  SignUserOut().then(() => {
                    console.log("Signed Out");
                    router.push("/");
                  });
                },
              },
            ].map((item, index) => (
              <ListItem button key={index} onClick={item.onClick}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component='main'
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {children}
      </Box>
    </Box>
  );
}
