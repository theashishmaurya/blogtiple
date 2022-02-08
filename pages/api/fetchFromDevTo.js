import axios from "axios";

export default async function handler(req, res) {
  const fetchBlog = req.body;
  console.log(fetchBlog.body);
  const hostandSlug = fetchBlog.body;
  var config = {
    method: "get",
    url: `https://dev.to/api/articles/${hostandSlug[0]}/${hostandSlug[1]}`,
  };
  axios(config)
    .then(function (response) {
      if (response.data) {
        res.send({
          title: response.data.title,
          coverImage: response.data.cover_image,
          contentMarkdown: response.data.body_html,
          tags: response.data.tags,
        });
      } else {
        res.json({ message: "no content found" });
      }
    })

    .catch(function (err) {
      console.log(err.response.status, err.response.statusText);
      res.json({
        message: err.response.statusText,
        error: err.response.status,
      });
    });
}
