import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { GlassMenu } from "../../utils/button";
import Link from "next/link";

export default function MobNav() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "#283240",
        height: "100vh",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "space-between",
      }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: "Log In", link: "/onboard" },
          { text: "Sign Up", link: "/onboard" },
          { text: "features", link: "#features" },
          { text: "blog", link: "https://blog.blogtiple.com" },
        ].map((data, index) => (
          <ListItem button key={data.text}>
            <Link href={data.link}>
              <ListItemText primary={data.text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <Box key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon
              sx={{
                color: "rgba( 255, 255, 255, 0.70 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.30 )",
                backdropFilter: "blur( 4px )",
                border: "0.1px solid rgba( 255, 255, 255, 0.18 )",
                margin: "0px",
                borderRadius: "5px",
              }}
              fontSize='large'
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Box>
      ))}
    </div>
  );
}
