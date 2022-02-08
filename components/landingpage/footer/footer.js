import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vw",
        background: "#283240",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: "2rem",
        alignItems: { xs: "center", md: "start" },
      }}
    >
      <Box sx={{ margin: { xs: "1rem", md: "0" } }}>
        <Typography color='primary'>
          Copyright 2021 © All rights reserved.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          margin: { xs: "1rem", md: "0" },
        }}
      >
        <Box sx={{ margin: "0 0 1rem 0" }}>
          <Typography color='primary'>Follow Us</Typography>
        </Box>
        <Stack direction='row' gap={4}>
          {" "}
          <a href=' https://twitter.com/Blogtiple'>
            <img src='https://img.icons8.com/color/32/000000/twitter.png' />{" "}
          </a>
          <a href='https://www.instagram.com/blogtiple/'>
            <img src='https://img.icons8.com/color/32/000000/instagram-new.png' />
          </a>
          <a href='https://www.linkedin.com/company/blogtiple/about/'>
            <img src='https://img.icons8.com/fluency/32/000000/linkedin.png' />
          </a>
        </Stack>
      </Box>
      <Box>
        <Typography color='primary'>
          Write us on:{" "}
          <a href='mailto:contact@blogtiple.com'>contact@blogtiple.com</a>
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
