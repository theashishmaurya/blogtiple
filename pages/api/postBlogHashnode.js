import axios from "axios";
import { DecryptpayLoad } from "../../components/lib/encoding";

export default async function handler(req, res) {
  const apiResponses = req.body.body.body;
  const tokenValue = await req.body.body.token;
  const keyValue = await req.body.body.key;
  const { title, contentMarkdown, coverImage, tags } = apiResponses;
  const apiKey = DecryptpayLoad(tokenValue, keyValue);
  let tagNames = "";
  for (let i in tags) {
    tagNames = tagNames + tags[i] + ",";
  }
  tagNames = tagNames.slice(0, -1);

  axios("https://api.hashnode.com", {
    method: "POST",
    headers: {
      Authorization: apiKey,
    },
    data: {
      query:
        "mutation createStory($input: CreateStoryInput!){ createStory(input: $input){ code success message } }",
      variables: {
        input: {
          title: title,
          contentMarkdown: contentMarkdown,
          tags: [
            {
              _id: "56744721958ef13879b94c7e",
              name: tagNames,
              slug: "programming",
            },
          ],
          coverImageURL: coverImage,
        },
      },
    },
  })
    .then((response) => {
      console.log("DataSent");
      res.json({
        message: response.statusText,
        status: response.status,
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
        error: err.code,
      });
    });
}
