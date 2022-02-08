import { Button, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ImportUrlBar } from "./importBar";
import { useAuth } from "../../../context/authcontext";
import { useEffect, useState } from "react";
import { useData } from "../../../context/datacontext";
import PostSetting from "./postSetting";
import PostDataMedium from "../../lib/postDataMedium";
import PostToDev from "../../lib/postDataDev";
import SendIcon from "@mui/icons-material/Send";
import PostToHash from "../../lib/postDataHash";
import BlogDisplay from "./BlogDisplay";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ScheduleModal from "./scheduleModal";
import Swal from "sweetalert2";
const ImportPost = () => {
  const { apiData, setApiData, UserData, sendResponse, setResponse } =
    useData();
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { title, coverImage, contentMarkdown, tags } = apiData;

  useEffect(() => {}, [apiData]);
  const blogContent = apiData.contentMarkdown;
  const handleSubmit = () => {
    if (apiData.postTo && currentUser && UserData) {
      const postTo = Array.from(apiData.postTo);
      console.log(postTo);
      for (let site in postTo) {
        console.log(postTo[site]);
        if (postTo[site] === "medium") {
          PostDataMedium(apiData, UserData.mediumKey, currentUser.uid)
            .then((response) => {
              console.log(response.data.message);
              setResponse({ ...sendResponse, medium: response.data.message });
            })
            .catch(function (error) {
              console.log(error);
            });
        } else if (postTo[site] === "dev") {
          PostToDev(apiData, UserData.devKey, currentUser.uid)
            .then((response) => {
              console.log(response.data.message);
              setResponse({ ...sendResponse, dev: response.data.message });
            })
            .catch(function (error) {
              console.log(error);
            });
        } else if (postTo[site] === "hashnode") {
          PostToHash(apiData, UserData.hashnodeKey, currentUser.uid)
            .then((response) => {
              console.log(response.data.message);
              setResponse({ ...sendResponse, hashnode: response.data.message });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        apiData.contentMarkdown = blogContent;
      }
    }
    Swal.fire({
      title: "Status",
      text: `medium:${sendResponse.medium}\n
          hashnode:${sendResponse.hashnode}\n
          dev:${sendResponse.dev}`,
      icon: "info",
    });
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
      }}
    >
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : null}

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          margin: "1rem 0",
        }}
      >
        <Typography>
          Hello,
          <strong>
            {" "}
            {`${UserData ? UserData.firstName : ""} ${
              UserData ? UserData.lastName : ""
            }`}
          </strong>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", margin: "4rem 0" }}>
        <ImportUrlBar setIsLoading={setIsLoading} />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          margin: "8rem 2rem",
          display: "flex",
          justifyContent: "center",
          background: "#EDE9E9",
          width: "75vw",
          maxHeight: "200vh",
          overflowY: "auto",
          overflowX: "hidden",
          padding: "2rem 0",
        }}
      >
        {/* <BlogCard coverImage={coverImage} title={title} /> */}
        <Box sx={{ maxWidth: "70%" }}>
          <BlogDisplay
            coverImage={coverImage}
            title={title}
            content={contentMarkdown}
            tags={tags}
          />
        </Box>
      </Box>
      <Paper
        sx={{
          flexGrow: 1,
          padding: "2rem",
          margin: "4rem 2rem",
        }}
        elevation={2}
      >
        <PostSetting isLoading={isLoading} />
        <Box sx={{ flexGrow: 1, justifyContent: "end", display: "flex" }}>
          <ScheduleModal
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
          <Button
            variant='contained'
            sx={{ background: "#283240", color: "#ffffff", mx: "2rem" }}
            onClick={handleOpen}
          >
            Schedule
            <ScheduleIcon sx={{ margin: "0 0.2rem" }} fontSize='small' />
          </Button>
          <Button
            variant='contained'
            sx={{ background: "#283240", color: "#ffffff" }}
            onClick={handleSubmit}
          >
            Send
            <SendIcon sx={{ margin: "0 0.2rem" }} fontSize='small' />
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ImportPost;
