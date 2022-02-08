import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useData } from "../../../context/datacontext";
import { useAuth } from "../../../context/authcontext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: " 60vh",
  height: "60vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ScheduleModal = ({ open, handleClose, handleOpen }) => {
  const [value, setValue] = useState();
  const { SchedulePost } = useData();
  const { currentUser } = useAuth();

  const handleSubmit = () => {
    SchedulePost(value, currentUser.uid)
      .then((data) => {
        console.log(data.data);
      })
      .catch((Err) => console.log(Err));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Select A date
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0rem",
            height: "70%",
            width: "100%",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Basic example'
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            variant='contained'
            sx={{ background: "#283240", color: "#ffffff" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ScheduleModal;
