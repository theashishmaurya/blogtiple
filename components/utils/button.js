import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

export const BlackButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  minWidth: "min-content",
  backgroundColor: "#283240",
  textTransform: "none",
  padding: "1rem 2rem",
  borderRadius: "10px",
  boxShadow: "0 8px 32px 0 rgba( 0, 0, 0, 0.27 )",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
  "&:hover": {
    backgroundColor: "#000000",
  },
}));

export const TextButton = styled(Button)(({ theme }) => ({
  color: "inherit",
  textTransform: "none",

  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(20),
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export const GlassButton = styled(Button)(({ theme }) => ({
  color: "inherit",
  textTransform: "none",
  padding: "0.7rem",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "transparent",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
  background: "rgba( 255, 255, 255, 0.25 )",
  boxShadow: "0 8px 32px 0 rgba( 0, 0, 0, 0.27 )",
  backdropFilter: "blur( 4px )",
  border: "1px solid rgba( 0, 0, 0, 0.18 )",
}));

export const GlassMenu = styled(Button)(({ theme }) => ({
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "transparent",
  },
  background: "rgba( 255, 255, 255, 0.25 )",
  boxShadow: "0 8px 32px 0 rgba( 0, 0, 0, 0.27 )",
  backdropFilter: "blur( 4px )",
  border: "0.1px solid rgba( 255, 255, 255, 0.18 )",
}));
