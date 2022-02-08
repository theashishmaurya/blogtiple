import { Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/authcontext";
import { useData } from "../../../context/datacontext";
import { DevIcon, HashnodeIcon, MediumIcon } from "../../utils/customIcon";

const ApiSetting = () => {
  const { AddApiKey, UserData } = useData();
  const mediumRef = useRef();
  const hashnodeRef = useRef();
  const devRef = useRef();

  const { currentUser } = useAuth();

  useEffect(() => {
    if (UserData) {
      (mediumRef.current.value = UserData.mediumKey),
        (hashnodeRef.current.value = UserData.hashnodeKey),
        (devRef.current.value = UserData.devKey);
    }
  }, [UserData]);

  const handleMediumUpdate = (e) => {
    e.preventDefault();
    if (mediumRef.current.value.length > 0) {
      AddApiKey.medium(mediumRef.current.value, currentUser.uid).then(() => {
        Swal.fire({
          title: "Successfull",
          text: "Api Updated Successfully",
          icon: "success",
        });
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Please enter a Valid API key then update",
        icon: "error",
      });
    }
  };
  const handlehashnodeUpdate = (e) => {
    e.preventDefault();
    if (hashnodeRef.current.value.length > 0) {
      AddApiKey.hashnode(hashnodeRef.current.value, currentUser.uid).then(
        () => {
          Swal.fire({
            title: "Successfull",
            text: "Api Updated Successfully",
            icon: "success",
          });
        }
      );
    } else {
      Swal.fire({
        title: "Error",
        text: "Please enter a Valid API key then update",
        icon: "error",
      });
    }
  };
  const handleDevUpdate = (e) => {
    e.preventDefault();
    if (devRef.current.value.length > 0) {
      AddApiKey.dev(devRef.current.value, currentUser.uid).then(() => {
        Swal.fire({
          title: "Successfull",
          text: "Api Updated Successfully",
          icon: "success",
        });
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Please enter a Valid API key then update",
        icon: "error",
      });
    }
  };
  return (
    <Box sx={{ flexGrow: 1, margin: "4rem 0", width: "70%" }}>
      <Typography variant='h4'>Api key Setting</Typography>
      <Stack sx={{ margin: "4rem 0rem" }} gap={4}>
        <Stack direction='row' sx={{ alignItems: "center" }} gap={8}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ margin: "0rem 1rem 0 0" }}>
              <MediumIcon />
            </Box>
            <Typography fontWeight='500' variant='h6'>
              Medium
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              fullWidth
              variant='outlined'
              size='small'
              type='password'
              placeholder='YOUR API KEY'
              inputRef={mediumRef}
              InputProps={{
                endAdornment: (
                  <Button
                    variant='text'
                    sx={{ color: "#000000" }}
                    onClick={handleMediumUpdate}
                  >
                    Add/Update
                  </Button>
                ),
              }}
            />
          </Box>
        </Stack>
        <Stack direction='row' sx={{ alignItems: "center" }} gap={6}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ margin: "0rem 1rem 0 0" }}>
              <HashnodeIcon />
            </Box>
            <Typography fontWeight='500' variant='h6'>
              Hashnode
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              fullWidth
              variant='outlined'
              size='small'
              placeholder='YOUR API KEY'
              type='password'
              inputRef={hashnodeRef}
              InputProps={{
                endAdornment: (
                  <Button
                    variant='text'
                    sx={{ color: "#000000" }}
                    onClick={handlehashnodeUpdate}
                  >
                    Add/Update
                  </Button>
                ),
              }}
            />
          </Box>
        </Stack>
        <Stack direction='row' sx={{ alignItems: "center" }} gap={13}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ margin: "0rem 1rem 0 0" }}>
              <DevIcon />
            </Box>
            <Typography fontWeight='500' variant='h6'>
              Dev
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              fullWidth
              variant='outlined'
              size='small'
              type='password'
              placeholder='YOUR API KEY'
              inputRef={devRef}
              InputProps={{
                endAdornment: (
                  <Button
                    variant='text'
                    sx={{ color: "#000000" }}
                    onClick={handleDevUpdate}
                  >
                    Add/Update
                  </Button>
                ),
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ApiSetting;
