import { Cancel, Tag } from "@mui/icons-material";
import {
  FormControl,
  Stack,
  TextField,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState, useContext, useEffect } from "react";
import { DataContext, useData } from "../../../context/datacontext";

const Tags = ({ data, handleDelete }) => {
  return (
    <Box
      sx={{
        background: "#283240",
        height: "100%",
        display: "flex",
        padding: "0.4rem",
        margin: "0 0.1rem 0 0",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
      }}
    >
      <Stack direction='row' gap={1}>
        <Typography fontSize={10}>{data}</Typography>
        <Cancel
          sx={{ cursor: "pointer" }}
          fontSize='small'
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

export default function InputTags({ isLoading }) {
  // const [apiData, setApiData] = useContext(DataContext);
  const values = useData();
  const { apiData, setApiData } = values;
  const [tags_, SetTags] = useState([]);
  const tagRef = useRef();

  useEffect(() => {
    if (tags_) setApiData({ ...apiData, tags: [...apiData.tags, ...tags_] });
  }, [tags_]);

  useEffect(() => {
    console.log(isLoading);
    if (!isLoading) {
      SetTags(apiData.tags);
    }
  }, [isLoading]);

  // useEffect(() => {
  //   console.log(isLoading);
  //   if (!isLoading) {
  //     SetTags(apiData.tags);
  //   }
  // }, [isLoading]);

  const handleDelete = (value) => {
    const newtags = tags_.filter((val) => val !== value);
    SetTags(newtags);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    SetTags([...tags_, tagRef.current.value]);
    tagRef.current.value = "";
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={handleOnSubmit}>
        <TextField
          inputRef={tagRef}
          fullWidth
          variant='standard'
          size='small'
          sx={{ margin: "1rem 0" }}
          margin='none'
          placeholder={tags_ && tags_.length < 5 ? "Enter tags" : ""}
          InputProps={{
            startAdornment: (
              <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }}>
                {tags_ &&
                  tags_.map((data, index) => {
                    return (
                      <Tags
                        data={data}
                        handleDelete={handleDelete}
                        key={index}
                      />
                    );
                  })}
              </Box>
            ),
          }}
        />
      </form>
    </Box>
  );
}
