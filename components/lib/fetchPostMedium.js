import axios from "axios";

const fetchPostMedium = async (url) => {
  if (url) {
    return await axios.post("/api/fetchFromMedium", {
      body: url,
    });
  } else {
    console.log("url is invalid");
  }
};

export default fetchPostMedium;
