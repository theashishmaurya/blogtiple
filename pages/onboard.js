import { Box, Paper, Stack, Typography } from "@mui/material";
import { Background } from "../components/landingpage/header/header";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BlackButton } from "../components/utils/button";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { useAuth } from "../context/authcontext";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useRef } from "react";

const LoginContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255 ,0.25)",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 8px 32px 0 rgba( 0, 0, 0, 0.27 )",
  backdropFilter: "blur( 4px )",
  border: "0.1px solid rgba( 255, 255, 255, 0.18 )",
}));

const Onboard = () => {
  const { GoogleSignUp, GithubSignUp, EmailLinkSingUp } = useAuth();
  const router = useRouter();
  const emailRef = useRef();

  const handleEmailSingUp = (e) => {
    e.preventDefault();
    EmailLinkSingUp(emailRef.current.value)
      .then(() =>
        Swal.fire({
          title: "Success",
          text: "Check your email for the login link",
          icon: "success",
        })
      )
      .catch((err) => {
        Swal.fire({
          title: "Something went wrong",
          text: err.message,
          icon: "error",
        });
      });
  };

  const HandleGoogleSingUp = (e) => {
    e.preventDefault();
    GoogleSignUp()
      .then(() => {
        router.push("/dashboard/importblog");
      })
      .catch((err) => {
        Swal.fire({
          title: "Something went wrong",
          text: err.message,
          icon: "error",
        });
      });
  };
  const HandleGithubSingUp = (e) => {
    e.preventDefault();
    GithubSignUp()
      .then(() => {
        router.push("/dashboard/importblog");
      })
      .catch((err) => {
        Swal.fire({
          title: "Something went wrong",
          text: err.message,
          icon: "error",
        });
      });
  };
  return (
    <Background
      square
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <LoginContainer>
        <Box
          sx={{
            margin: { xs: "2rem", md: "5rem", padding: "2rem" },
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant='h3' fontWeight='bold'>
            Sign In/create an account
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "2rem 0 0 0",
            }}
          >
            <Typography variant='h5' fontWeight='bold'>
              Sing in with secure link{" "}
            </Typography>
            <Box
              component='form'
              sx={{
                "& > :not(style)": { m: 1, width: { xs: "80%" } },
                margin: "2rem 0 1rem 0",
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                inputRef={emailRef}
                id='standard-basic'
                label={<Typography variant='h5'>Email</Typography>}
                variant='standard'
                color='secondary'
                focused
                sx={{ padding: "1rem 0 0 0" }}
              />
            </Box>
            <Box>
              <BlackButton onClick={handleEmailSingUp}>Submit</BlackButton>
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              margin: "2rem 0",
            }}
          >
            <Typography variant='h5' fontWeight='bold'>
              or, Connect with
            </Typography>
            <Box sx={{ flexGrow: 0.5, margin: "1rem 0 0 0" }}>
              <Stack direction={{ xs: "column", md: "row" }} gap={4}>
                <Button
                  sx={{
                    padding: "1rem 4rem",
                    borderRadius: "8px",
                    fontWeight: (theme) => theme.typography.fontWeightBold,
                  }}
                  variant='contained'
                  color='secondary'
                  size='large'
                  startIcon={<GitHubIcon />}
                  onClick={HandleGithubSingUp}
                >
                  Github
                </Button>
                <Button
                  sx={{
                    padding: "1rem 4rem",
                    borderRadius: "8px",
                    fontWeight: (theme) => theme.typography.fontWeightBold,
                  }}
                  variant='contained'
                  size='large'
                  startIcon={<GoogleIcon />}
                  onClick={HandleGoogleSingUp}
                >
                  Google
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </LoginContainer>
    </Background>
  );
};

export default Onboard;
