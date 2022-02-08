import axios from "axios";
const PostDataMedium = (data, token, key) => {
  if (data && key && token) {
    let content = `<H1>${data.title}</H1></br> <figure> <img alt = "coverImage" src ="${data.coverImage}"/></figure> </br>${data.contentMarkdown}</br><p style="color:#808080;">This blog is posted using <a href="www.blogtiple.com">Blogtiple</a></p>`;
    data.contentMarkdown = content;

    return axios.post("/api/postBlogMedium", {
      body: { body: data, token: token, key: key },
    });
  } else {
    console.log("please enter the url");
  }
};

export default PostDataMedium;
