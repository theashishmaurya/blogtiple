import axios from "axios";
import { urlValid } from "./urlValidation";

const fetchPostDevTo = async (url) => {
  if (url) {
    const hostandSlug = urlValid(url);
    return await axios.post("/api/fetchFromDevTo", {
      body: hostandSlug,
    });
  } else {
    console.log("url is invalid");
  }
};
export default fetchPostDevTo;
