import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { BlackButton, TextButton } from "../../utils/button";
import MobNav from "./mobnav";
import Link from "next/link";
import Logo from "../logo";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, padding: "0rem 0rem 1rem 1rem" }}>
      <AppBar
        position='static'
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
            <Box
              sx={{
                flexGrow: { xs: 1, md: 0 },
                display: "flex",
              }}
            >
              <Logo />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                paddingRight: "0rem",
              }}
            >
              <Stack spacing={10} direction='row'>
                <Typography variant='h6' fontWeight='bold'>
                  <TextButton href='#features'>Features</TextButton>{" "}
                </Typography>
                <Typography variant='h6' fontWeight='bold'>
                  <TextButton>Pricing</TextButton>{" "}
                </Typography>
                <Typography variant='h6' fontWeight='bold'>
                  <TextButton>Blog</TextButton>{" "}
                </Typography>
              </Stack>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                flexGrow: 0,
                justifyContent: "space-between",
              }}
            >
              <Link href='/onboard'>
                <TextButton sx={{ margin: "0 0.4rem" }}>Log in</TextButton>
              </Link>

              <Link href='/onboard'>
                <BlackButton
                  variant='contained'
                  size='large'
                  sx={{ fontWeight: "bold" }}
                >
                  Sign Up
                </BlackButton>
              </Link>
            </Box>
            <Box
              sx={{
                padding: 0,
                display: { sx: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <MobNav />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
