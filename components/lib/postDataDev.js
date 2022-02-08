import axios from "axios";

const PostToDev = async (data, token, key) => {
  let content = `${data.contentMarkdown}</br><p style="color:#808080;">This blog is posted using <a href="www.blogtiple.com">Blogtiple</a></p>`;
  data.contentMarkdown = content;
  if (data && token && key) {
    return axios.post("/api/postBlogDevTo", {
      body: { body: data, token: token, key: key },
    });
  } else {
    console.log("please enter the url");
  }
};
export default PostToDev;
