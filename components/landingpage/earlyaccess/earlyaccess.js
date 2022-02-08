import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { doc, setDoc } from "firebase/firestore";
import { useRef } from "react";
import { db } from "../../../firebase/firebase";
import { BlackButton } from "../../utils/button";

const Earlyaccess = () => {
  const emailRef = useRef();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("Working");
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    await setDoc(doc(db, "emails", email), {
      email: email,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
    emailRef.current.value = "";
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        margin: { sx: "0.4rem , md : 1rem" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <TextField
        id='outlined-basic'
        label='Email'
        variant='outlined'
        sx={{ width: "100%", margin: { md: "1rem", xs: "1rem 0rem" } }}
        inputRef={emailRef}
      />

      <BlackButton
        sx={{ width: { xs: "100%", md: "18rem" }, margin: { md: "1rem" } }}
        onClick={handleOnSubmit}
      >
        <Typography>Get early access</Typography>
      </BlackButton>
    </Box>
  );
};

export default Earlyaccess;
