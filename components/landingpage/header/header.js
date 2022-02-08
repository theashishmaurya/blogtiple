import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "../../utils/container";
import HeroArea from "./heroArea";
import Navbar from "./navbar";

export const Background = styled(Box)(({ theme }) => ({
  backgroundColor: "#bdc3c7",
  backgroundColor: "-webkit-linear-gradient(to right, #475f78, #bdc3c7)",
  backgroundImage: "linear-gradient(to bottom, #475f78,#fff)",
  height: "100%",
  width: "100%",
}));

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Background square>
        <Container elevation={0}>
          <Navbar />
        </Container>
        <HeroArea />
      </Background>
    </Box>
  );
};
export default Header;
