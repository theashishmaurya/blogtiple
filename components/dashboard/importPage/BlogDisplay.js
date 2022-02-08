import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import PlaceholderImage from "../../../public/image/BlogCoverPlaceholder.png";
import Image from "next/image";

const BlogDisplay = ({ coverImage, title, content }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant='h4' fontWeight='bold' sx={{ margin: "2rem 0" }}>
        {title ? title : "Welcome to Blogtiple!"}
      </Typography>

      <Box>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={coverImage ? coverImage : "/image/BlogCoverPlaceholder.png"}
          alt='coverimage'
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
      <div
        className='blog-data'
        dangerouslySetInnerHTML={{
          __html: content
            ? content
            : `<p>Hello 👋, Welcome to Blogtiple. I see you are already blogging like a pro.</p>`,
        }}
      ></div>
    </Box>
  );
};

export default BlogDisplay;
