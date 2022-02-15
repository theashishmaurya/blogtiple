const axios = require("axios");
const { connectFirestoreEmulator } = require("firebase/firestore");
const handler = async (event, context) => {
  console.log("Received event:", event);
  // call database for below data
  await axios.get("http://localhost:8888/api/getScheduledPost").then((data) => {
    // console.log(data.data);

    data.data.forEach((posts) => {
      posts.map((post) => {
        const tempDate = JSON.parse(post.date);
        let t = new Date(1970, 0, 1);
        t.setSeconds(tempDate.seconds);
        const date = new Date(t);

        // let scheduleDate = new Date(date);
        console.log(date);
        // if (data.scheduleDate === today) {
        //   const response = axios
        //     .post("http://localhost:8888/api/postBlogDevTo", {
        //       body: { body: data },
        //     })
        //     .then((data) => {
        //       console.log(data);
        //     })
        //     .catch((err) => {
        //       console.log("errors:", err);
        //     });
        //   return {
        //     statusCode: 200,
        //     body: response.toString(),
        //   };
        // }
      });
    });
  });
  // const data = {
  //   title: "Test Blog",
  //   contentMarkdown: "this is test markdown for schedule function",
  //   coverImage: "",
  //   tags: [],
  //   postTo: [],
  //   scheduleDate: "03-06-2022",
  // };
  //call this function if todays time is equal to given time

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "-" + dd + "-" + yyyy;
  // console.log(today);
  // if (data.scheduleDate === today) {
  //   const response = axios
  //     .post("http://localhost:8888/api/postBlogDevTo", {
  //       body: { body: data },
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log("errors:", err);
  //     });
  //   return {
  //     statusCode: 200,
  //     body: response.toString(),
  //   };
  // }
  return {
    statusCode: 200,
    body: "Ok",
  };
};

module.exports.handler = handler;
