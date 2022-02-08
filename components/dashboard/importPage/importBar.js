import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CachedIcon from "@mui/icons-material/Cached";
import { Typography } from "@mui/material";
import fetchPostHashnode from "../../lib/fetchPostHashnode";
import fetchPostDevTo from "../../lib/fetchPostDevTo";
import fetchPostMedium from "../../lib/fetchPostMedium";
import { DataContext, useData } from "../../../context/datacontext";
import InputLabel from "@mui/material/InputLabel";
import { validURL } from "../../lib/urlValidation";
import Swal from "sweetalert2";
const assignDataToContext = (data, setApiData, apiData) => {
  let obj = data.data;
  setApiData({
    ...apiData,
    title: obj.title,
    contentMarkdown: obj.contentMarkdown,
    coverImage: obj.coverImage,
    tags: obj.tags,
  });
};

export const ImportUrlBar = ({ setIsLoading }) => {
  const [provider, setProvider] = useState(null);
  const [url, setUrl] = useState("");
  const values = useData();
  const { apiData, setApiData } = values;
  const handleProviderChange = (event) => {
    setProvider(event.target.value);
  };
  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleFetchBlog = async (event) => {
    console.log("Fetch");
    event.preventDefault();
    setIsLoading(true);

    setApiData("");

    if (provider === "Hashnode") {
      fetchPostHashnode(url)
        .then((data) => {
          console.log(data.data.message);
          if (data.data.error)
            Swal.fire({
              title: "Error",
              text: "Post not found,please check your url and provider",
              icon: "error",
            });
          else {
            assignDataToContext(data, setApiData, apiData);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (provider === "Dev") {
      fetchPostDevTo(url)
        .then((data) => {
          console.log(data.data.message);
          if (data.data.error)
            Swal.fire({
              title: "Error",
              text: "Post not found,please check your url and provider",
              icon: "error",
            });
          else {
            assignDataToContext(data, setApiData, apiData);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (provider === "Medium") {
      fetchPostMedium(url)
        .then((data) => {
          assignDataToContext(data, setApiData, apiData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: "Error",
            text: "Post not found,please check your url and provider",
            icon: "error",
          });
          setIsLoading(false);
        });
    }
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: "70%" }}>
      <Stack direction='row' gap={2}>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <FormControl
            fullWidth
            sx={{
              maxWidth: "10rem",
            }}
            size='small'
          >
            <InputLabel id='demo-simple-select-label' sx={{ color: "#ffffff" }}>
              Provider
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={provider}
              label='Provider'
              // InputLabelProps={{ shrink: false }}
              sx={{
                background: "#283240",
                color: "#ffffff",
                "& .MuiSelect-icon": { color: "#ffffff" },
              }}
              onChange={handleProviderChange}
            >
              <MenuItem value={"Medium"}>Medium</MenuItem>
              <MenuItem value={"Hashnode"}>Hashnode</MenuItem>
              <MenuItem value={"Dev"}>DEV</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{}}
            fullWidth
            size='small'
            variant='outlined'
            placeholder='https://blog.theashishmaurya.me/do-you-really-know-useeffect'
            value={url}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Button
            sx={{ background: "#283240", color: "white" }}
            variant='contained'
            onClick={handleFetchBlog}
          >
            <Stack direction='row' gap={1}>
              <Typography sx={{ textTransform: "none" }}>Fetch</Typography>
              <CachedIcon />
            </Stack>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
