import axios from "axios";

async function mediumURLparser(URL) {
  let isCustom = false;
  const mediumUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed";
  const arr = URL.split("/");
  console.log(arr[2]);
  if (arr[2] === "medium.com") {
    const result = `${mediumUrl}/${arr[3]}`;
    return { result, isCustom };
  } else {
    let custumeArr = arr[2].split(".");
    isCustom = true;
    console.log(arr[2]);
    console.log(custumeArr[0]);
    const result = `${mediumUrl}/@${custumeArr[0]}`;
    return { result, isCustom };
  }
}
export default async function PostFroMedium(req, res) {
  const url = req.body.body;

  const link = await mediumURLparser(url);
  const { data } = await axios.get(link.result);

  if (!data) {
    res.json({
      message: "Not Found",
      error: "404",
    });
  } else {
    const feed = data;

    const itemArray = feed.items;
    const articleArray = await itemArray.filter(
      (item) => item.link.split("?")[0] === url
    );
    const article = await articleArray[0];
    if (!link.isCustom) {
      let firstIndexOfImage = article.content.indexOf("<figure>");
      if ((firstIndexOfImage = 1)) {
        let lastIndexOfImage = article.content.indexOf("</figure>");
        const removeImage = article.content.substr(
          firstIndexOfImage,
          lastIndexOfImage + 8
        );
        article.content = article.content.replace(removeImage, ``);
      }
    }

    if (article) {
      let data = {
        title: article.title,
        contentMarkdown: article.content,
        coverImage: article.thumbnail,
        tags: article.categories,
      };

      res.send(data);
    } else {
      res.json({
        message: "Not Found",
        error: "404",
      });
    }
  }
}
