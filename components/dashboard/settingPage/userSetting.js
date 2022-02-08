import {
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  useRadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/authcontext";
import { useData } from "../../../context/datacontext";

const UserSetting = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { currentUser } = useAuth();
  const { AddUsers, UserData } = useData();

  useEffect(() => {
    setUserData({ ...userData, email: currentUser ? currentUser.email : "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    if (UserData) {
      setUserData({
        ...userData,
        firstName: UserData.firstName,
        lastName: UserData.lastName,
        email: currentUser.email,
      });
    }
  }, [UserData, currentUser]);

  const handleDataChange = (e, name) => {
    e.preventDefault();
    setUserData({ ...userData, [name]: e.target.value });
  };

  const handleDataSubmit = (e) => {
    e.preventDefault();
    AddUsers(
      userData.firstName,
      userData.lastName,
      currentUser.email,
      currentUser.uid
    )
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Account details Updated Successfully",
          icon: "success",
        });
        console.log("Update Success Full");
      })
      .catch((err) => {
        Swal.fire({
          title: "error",
          text: "OOPS! Something went wrong",
          icon: "error",
        });
      });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant='h4'>Account Setting </Typography>
      <Box sx={{ flexGrow: 1, margin: "4rem 0", width: "70%" }}>
        <Stack direction='row' gap={2} sx={{ margin: "2rem 0" }}>
          <TextField
            fullWidth
            variant='outlined'
            placeholder='First Name'
            size='small'
            type='text'
            value={userData.firstName}
            onChange={(e) => handleDataChange(e, "firstName")}
          />
          <TextField
            fullWidth
            variant='outlined'
            placeholder='Last Name'
            size='small'
            type='text'
            value={userData.lastName}
            onChange={(e) => handleDataChange(e, "lastName")}
          />
        </Stack>
        <Stack direction='row' gap={2}>
          <TextField
            fullWidth
            variant='outlined'
            value={userData.email}
            placeholder='youremail@gmail.com'
            type='email'
            size='small'
            disabled={true}
          />
        </Stack>
        <Stack></Stack>
        <Box
          sx={{
            margin: "2rem 0 4rem 0",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button
            variant='contained'
            sx={{ background: "#283240", color: "white" }}
            onClick={handleDataSubmit}
          >
            Update
          </Button>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default UserSetting;
