const axios = require("axios");
const { connectFirestoreEmulator } = require("firebase/firestore");
const handler = async (event, context) => {
  console.log("Received event:", event);
  // call database for below data
  await axios.get("http://localhost:8888/api/getScheduledPost").then((data) => {
    // console.log(data.data);

    data.data.forEach((posts) => {
      posts.map((post) => {
        // console.log(post);
        const tempDate = JSON.parse(post.date);
        let t = new Date(1970, 0, 1);
        t.setSeconds(tempDate.seconds);
        const date = new Date(t);
        const postData = JSON.parse(post.postData);

        const postTo = postData.postTo;
        const keys = JSON.parse(post.key);
        //scheduled Date
        let scheduleDate =
          String(date.getMonth() + 1).padStart(2, "0") +
          "-" +
          String(date.getDate()).padStart(2, "0") +
          "-" +
          String(date.getFullYear());

        // System Today's date

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + "-" + dd + "-" + yyyy;

        if (scheduleDate === today) {
          console.log(postTo);
          postTo.map((blog) => {
            if (blog === "medium") {
              let content = `<H1>${postData.title}</H1></br> <figure> <img alt = "coverImage" src ="${postData.coverImage}"/></figure> </br>${postData.contentMarkdown}</br><p style="color:#808080;">This blog is posted using <a href="www.blogtiple.com">Blogtiple</a></p>`;
              postData.contentMarkdown = content;

              axios.post("http://localhost:8888/api/postBlogMedium", {
                body: { body: postData, token: keys[blog], key: post.userId },
              });

              console.log("posted to medium");
            }

            if (blog === "dev") {
              let modifiedContentdev = `${postData.contentMarkdown}</br><p style="color:#808080;">This blog is posted using <a href="www.blogtiple.com">Blogtiple</a></p>`;
              postData.contentMarkdown = modifiedContentdev;

              axios.post("http://localhost:8888/api/postBlogDevTo", {
                body: { body: postData, token: keys[blog], key: post.userId },
              });
              console.log("posted to dev");
            }

            if (blog === "hashnode") {
              let modifiedContentHashnode = `${postData.contentMarkdown}</br><p style="color:#808080;">This blog is posted using <a href="www.blogtiple.com">Blogtiple</a></p>`;
              postData.contentMarkdown = modifiedContentHashnode;

              axios.post("http://localhost:8888/api/postBlogHashnode", {
                body: { body: postData, token: keys[blog], key: post.userId },
              });
              console.log("posted to hashnode");
            }
          });
        }
      });
    });
  });

  return {
    statusCode: 200,
    body: "Ok",
  };
};

module.exports.handler = handler;
