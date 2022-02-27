import axios from "axios";
const PostToHash = (data, token, key) => {
  let content = `${data.contentMarkdown}</br><p style="color:#808080;">This blog is posted using <a target="_blank" href="https://blogtiple.com">Blogtiple</a></p>`;
  data.contentMarkdown = content;
  if (data && key && token) {
    return axios.post("/api/postBlogHashnode", {
      body: { body: data, token: token, key: key },
    });
  } else {
    console.log("please enter the url");
  }
};

export default PostToHash;
