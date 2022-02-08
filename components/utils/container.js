import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: "0 10vw",
  [theme.breakpoints.down("md")]: {
    padding: "0 2vw",
  },
}));

export const GlassContainer = styled(Box)(({ theme }) => ({
  color: "inherit",
  textTransform: "none",
  padding: "0.7rem",
  borderRadius: "10px",

  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
  background: "rgba( 255, 255, 255, 0.15 )",
  boxShadow: "0 8px 32px 0 rgba( 0, 0, 0, 0.17 )",
  backdropFilter: "blur( 2px )",
  border: "1px solid rgba( 0, 0, 0, 0.18 )",
}));
