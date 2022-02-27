import {
  Grid,
  Stack,
  Switch,
  TextField,
  Typography,
  Button,
} from "@mui/material";

import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { DevIcon, HashnodeIcon, MediumIcon } from "../../utils/customIcon";
import InputTags from "./inputTag";
import { useState, useContext, useEffect } from "react";
import { DataContext, useData } from "../../../context/datacontext";
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const PostSetting = ({
  isLoading,
  check,
  setCanonUrl,
  canonUrl,
  setCheck,
  tags_,
  SetTags,
}) => {
  const values = useData();
  const { apiData, setApiData } = values;

  useEffect(() => {
    const postSites = [];
    for (let site in check) {
      if (check[site]) {
        postSites.push(site);
      }
    }
    let setPostSites = new Set(postSites);
    console.log(setPostSites);
    setApiData({ ...apiData, postTo: Array.from(setPostSites) });
  }, [check]);

  const handleChange = (event) => {
    const name = event.target.name;
    setCheck({
      ...check,
      [event.target.name]: !check[name],
    });
  };

  const handleCanonical = (event) => {
    const url = event.target.value;
    setCanonUrl(event.target.value);
    setApiData({ ...apiData, canonicalURL: url });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant='h5' fontWeight='bold'>
        Post settings
      </Typography>
      <Grid container spacing={4} sx={{ padding: "4rem 0" }}>
        <Grid item md={6} xs={12}>
          <Typography variant='h6' fontWeight='bold'>
            Post to{" "}
          </Typography>
          <Stack sx={{ margin: "4rem 2rem" }} gap={4}>
            <Stack
              direction='row'
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex" }}>
                <Box sx={{ margin: "0rem 1rem 0 0" }}>
                  <MediumIcon />
                </Box>
                <Typography fontWeight='500' variant='h6'>
                  Medium
                </Typography>
              </Box>
              <IOSSwitch
                name='medium'
                onChange={handleChange}
                checked={check.medium}
              />
            </Stack>
            <Stack
              direction='row'
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex" }}>
                <Box sx={{ margin: "0rem 1rem 0 0" }}>
                  <HashnodeIcon />
                </Box>
                <Typography fontWeight='500' variant='h6'>
                  Hashnode
                </Typography>
              </Box>
              <IOSSwitch
                name='hashnode'
                onChange={handleChange}
                checked={check.hashnode}
              />
            </Stack>
            <Stack
              direction='row'
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex" }}>
                <Box sx={{ margin: "0rem 1rem 0 0" }}>
                  <DevIcon />
                </Box>
                <Typography fontWeight='500' variant='h6'>
                  Dev
                </Typography>
              </Box>
              <IOSSwitch
                name='dev'
                onChange={handleChange}
                checked={check.dev}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={6} xs={12} sx={{}}>
          <Typography variant='h6'>Other settings </Typography>

          <Stack sx={{ margin: "2rem 2rem" }}>
            <Box>
              <Typography
                variant='h6'
                fontWeight='medium'
                sx={{ margin: "1rem 0" }}
              >
                Tags
              </Typography>

              <InputTags
                isLoading={isLoading}
                tags_={tags_}
                SetTags={SetTags}
              />
            </Box>
            <Box>
              <Typography
                variant='h6'
                fontWeight='medium'
                sx={{ margin: "1rem 0" }}
              >
                Canonical link
              </Typography>

              <TextField
                variant='outlined'
                fullWidth
                size='small'
                onChange={handleCanonical}
                value={canonUrl}
              />
            </Box>

            <Box sx={{ margin: "1rem 0" }}></Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostSetting;
