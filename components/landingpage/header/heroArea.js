import { Box, Stack, Typography } from "@mui/material";
import { BlackButton, GlassButton } from "../../utils/button";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import Link from "next/link";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Earlyaccess from "../earlyaccess/earlyaccess";
import { GlassContainer } from "../../utils/container";

export const HeroContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: " 6vw",
  [theme.breakpoints.down("md")]: {
    padding: " 10vh 1vw 10vh 1vw",
  },
}));

const HeroArea = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: "1rem 1rem 0 1rem" }}>
      <HeroContainer elevation={0}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant='h1' color='white' fontWeight='bold'>
            <span style={{ color: "#283240" }}>BLOG</span>TIPLE
          </Typography>

          <Box
            sx={{
              fontSize: {
                xs: 20,
                md: 30,
              },
              margin: { xs: "2rem", md: "4rem 2rem" },
            }}
            color='white'
          >
            Posting blogs to multiple platforms had never been easier.
            <br />
            Integrated with <b style={{ color: "#283240" }}>HASHNODE, </b>
            <b style={{ color: "#283240" }}> MEDIUM, </b>{" "}
            <b style={{ color: "#283240" }}>DEV</b> and so on.
          </Box>
          <Stack direction='row' gap={2} mt={20}>
            <Link href='/onboard'>
              <BlackButton size='large'>Try for free</BlackButton>
            </Link>
            <GlassButton size='large'>
              <Stack direction='row' gap={1}>
                <PlayCircleFilledWhiteIcon />
                <Typography> Watch Video</Typography>
              </Stack>
            </GlassButton>
          </Stack>
        </Box>
      </HeroContainer>
    </Box>
  );
};

export default HeroArea;
