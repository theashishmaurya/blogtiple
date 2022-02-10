import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import DashboardLayout from "../../components/dashboard/layout/layout";
import { useAuth } from "../../context/authcontext";
import { useData } from "../../context/datacontext";
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const Card = ({ data }) => {
  let post = JSON.parse(data.post);
  let t = new Date(1970, 0, 1);
  t.setSeconds(data.date.seconds);
  const date = new Date(t);

  return (
    <Box>
      <Paper
        sx={{
          flexGrow: 1,
          background: "#283240",
          color: "#ffffff",
          padding: "1rem",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <Stack direction='row' gap={4} alignItems='center'>
          <Box
            sx={{
              maxWidth: "10rem",
              background: "#ffffff",
              width: "100%",
              minHeight: "2rem",
              borderRadius: "10px",
              color: "#000000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.5rem 0",

              clipPath:
                "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 50%)",
            }}
          >
            <Typography variant='h3' fontWeight='bold' mx={0.5}>
              {date.getDate()}
            </Typography>
            <Stack>
              <Typography variant='subtitle' fontWeight='bold'>
                {monthNames[date.getMonth()]}
              </Typography>
              <Typography variant='subtitle' fontWeight='bold'>
                {date.getFullYear()}
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Typography fontWeight='500' variant='h5'>
              {post.title}
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

const SchedulePost = () => {
  const { currentUser } = useAuth();
  const { GetScheduledPost } = useData();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(currentUser);
    if (currentUser) {
      console.log(currentUser.uid);
      GetScheduledPost(currentUser.uid)
        .then((data) => {
          console.log(data.data());
          setPosts(data.data().post);
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser]);
  return (
    <DashboardLayout>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "4rem 0rem",
            padding: "1rem",
            minHeight: "80vh",
            maxWidth: "70vw",
            minWidth: "90%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant='h4' fontWeight='bold' my={4}>
              Scheduled Posts
            </Typography>
          </Box>

          <Stack gap={4}>
            {posts.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </Stack>
        </Paper>
      </Box>
    </DashboardLayout>
  );
};
export default SchedulePost;
