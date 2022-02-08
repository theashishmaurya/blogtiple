import axios from "axios";

export default function handler(req, res) {
  if (req.body) {
    const fetchBlog = req.body;
    console.log(fetchBlog.body);
    const hostandSlug = fetchBlog.body;

    const query = `
  query PostDetailed{
    post( hostname : "https://${hostandSlug[0]}" , slug:"${hostandSlug[1]}"){
      title,
      coverImage,
      content,
      tags{name}
    }
  }
  `;

    axios({
      url: "https://api.hashnode.com",
      method: "post",
      data: {
        query,
      },
    })
      .then((data) => {
        const tags = [];
        console.log(data);
        if (data.data.data.post) {
          const tags_object = data.data.data.post.tags;
          tags_object.forEach((tag) => {
            tags.push(tag.name);
          });
          // tags_object = tags;
          const response = { ...data.data.data.post };
          response.tags = tags;
          console.log(response.tags);
          const dataValue = {
            title: response.title,
            contentMarkdown: response.content,
            coverImage: response.coverImage,
            tags: response.tags,
          };
          res.send(dataValue);
        } else {
          console.log("*************");
          res.json({
            message: "Not Found",
            error: "404",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({
          message: "Not Found",
          error: "404",
        });
      });
  } else {
    res.json({
      message: "please check your url",
    });
  }
}
