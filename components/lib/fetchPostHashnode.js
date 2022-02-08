import axios from "axios";
import { urlValid } from "./urlValidation";

const fetchPostHashnode = async (url) => {
  if (url) {
    const hostandSlug = urlValid(url);
    return await axios.post("/api/fetchFromHashnode", {
      body: hostandSlug,
    });
  } else {
    console.log("Please provide url");
  }
};

export default fetchPostHashnode;
