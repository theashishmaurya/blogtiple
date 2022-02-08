import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import analytics from "../../../public/image/analytics.jpg";
import crossblog from "../../../public/image/crossblog.jpg";
import automation from "../../../public/image/automation.jpg";
import encryption from "../../../public/image/encryption.jpg";
import scheduling from "../../../public/image/scheduling.jpg";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const Features = () => {
  return (
    <div id='features'>
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            margin: { xs: "4rem 0", md: "10rem 0" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant='h3' fontWeight='bold'>
              Features
            </Typography>
          </Box>

          <Box
            sx={{ flexGrow: 1, margin: { xs: "2rem 2rem", md: "6rem 6rem" } }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <Typography
                  variant='h4'
                  fontWeight='bold'
                  sx={{ margin: { xs: "2rem 0", md: "4rem 0" } }}
                >
                  Cross Blogging
                </Typography>
                <Typography variant='h6' color='#778899'>
                  Cross-blogging In just simple clicks, we are supporting
                  HASHNDODE , MEDIUM, and DEV. You define which one is your
                  primary blog and when your articles should be re-published on
                  other platforms. So Blogtiple will set the correct canonical
                  URL and publish them automatically.
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Image
                  src={crossblog}
                  layout='responsive'
                  alt='cross-blogging'
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant='h4'
                  fontWeight='bold'
                  sx={{ margin: { xs: "2rem 0", md: "4rem 0" } }}
                >
                  Automate your posting
                </Typography>
                <Typography variant='h6' color='#778899'>
                  Automate your cross-blogging with us. No need to copy-paste
                  your blog content every time you want to post it on different
                  blogging sites. Let Blogtiple handle that for you.
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Image src={automation} layout='responsive' alt='automation' />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant='h4'
                  fontWeight='bold'
                  sx={{ margin: { xs: "2rem 0", md: "4rem 0" } }}
                >
                  Schedule your posts
                </Typography>
                <Typography variant='h6' color='#778899'>
                  Don&#39;t feel like posting right now? Schedule your article
                  to post later and let Blogtiple&#39;s handle the posting on
                  the selected date.
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Image src={scheduling} layout='responsive' alt='scheduling' />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant='h4'
                  fontWeight='bold'
                  sx={{ margin: { xs: "2rem 0", md: "4rem 0" } }}
                >
                  All in one analytics
                </Typography>
                <Typography variant='h6' color='#778899'>
                  We at Blogtiple understand how hard it is for you to track
                  analytics of your blogs across multiple platforms to make your
                  blogging journey smooth we provide a unique way to track all
                  your blogs from Blogtiple&#39;s one and all analytics.
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Image src={analytics} layout='responsive' alt='analytics' />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant='h4'
                  fontWeight='bold'
                  sx={{ margin: { xs: "2rem 0", md: "4rem 0" } }}
                >
                  Fully encrypted
                </Typography>
                <Typography variant='h6' color='#778899'>
                  We understand how easily security can be compromised. That is
                  why all the authorization keys are encrypted before leaving
                  the browser, that means even people at Blogtiple can not read
                  your keys.
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Image src={encryption} layout='responsive' alt='encryption' />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Features;
