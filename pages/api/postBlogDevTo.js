import axios from "axios";
import { DecryptpayLoad } from "../../components/lib/encoding";

export default function handler(req, res) {
  const apiResponses = req.body.body.body;
  const tokenValue = req.body.body.token;
  const keyValue = req.body.body.key;
  const { title, contentMarkdown, coverImage, tags, canonicalURL } =
    apiResponses;
  const apiKey = DecryptpayLoad(tokenValue, keyValue);

  const modifyTags = [];
  var tempTags = tags;
  if (tempTags.length > 4) {
    tempTags = tempTags.slice(0, 4);
  }
  for (let i of tempTags) {
    let tagString = removeSpace(i);
    modifyTags.push(tagString);
  }
  var devToPost = JSON.stringify({
    article: {
      title: title,
      main_image: coverImage,
      body_markdown: contentMarkdown,
      published: true,
      tags: modifyTags,
      canonical_url: canonicalURL,
    },
  });

  var config = {
    method: "post",
    url: "https://dev.to/api/articles",
    headers: {
      "Content-Type": "application/json",
      "api-key": `${apiKey}`,
    },
    data: devToPost,
  };

  axios(config)
    .then((response) => {
      res.json({
        message: response.statusText,
        status: response.status,
      });
    })
    .catch((err) => {
      console.log("ERROR");
      console.log(err);
      res.json({
        message: err.response.statusText,
        error: err.response.status,
      });
    });
}
function removeSpace(str) {
  str = str.replace(/-|\s+/g, "");
  return str;
}
