import axios from "axios";
import { DecryptpayLoad } from "../../components/lib/encoding";
export default async function fetchUserId(req, res) {
  const apiResponses = req.body.body.body;
  const tokenValue = await req.body.body.token;
  const keyValue = await req.body.body.key;

  const apiKey = DecryptpayLoad(tokenValue, keyValue);
  const { title, contentMarkdown, coverImage, tags, canonicalURL } =
    apiResponses;

  axios({
    method: "GET",
    url: "https://api.medium.com/v1/me",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
    },
  })
    .then((response) => {
      const authorId = response.data.data.id;
      console.log("APIKEY:", apiKey);
      PostToMedium(
        authorId,
        title,
        contentMarkdown,
        coverImage,
        canonicalURL,
        tags,
        apiKey
      )
        .then((response) => {
          res.json({
            message: response.statusText,
            status: response.status,
          });
        })

        .catch((err) => {
          console.log("Error in senting post");
          console.log(err);
          res.json({
            message: err.response.statusText,
            error: err.response.status,
          });
        });
    })
    .catch((err) => {
      console.log("Error in senting post");
      console.log(err);
      res.json({
        message: err.response.statusText,
        error: err.response.status,
      });
    });
}
function PostToMedium(
  authorId,
  title,
  contentMarkdown,
  coverImage,
  canonicalURL,
  tags,
  apiKey
) {
  const blogData = JSON.stringify({
    title: title,
    contentFormat: "html",
    content: contentMarkdown,
    tags: tags,
    canonicalUrl: canonicalURL,
    publishStatus: "public",
    // publishStatus: "draft",
  });

  const config = {
    method: "post",
    url: `https://api.medium.com/v1/users/${authorId}/posts`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
    },
    data: blogData,
  };

  return axios(config);
}
