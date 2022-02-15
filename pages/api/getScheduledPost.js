import { collection, query, getDocs, getDoc, doc } from "@firebase/firestore";
import { async } from "@firebase/util";
import { auth, db } from "../../firebase/firebase";

const GetUserDetails = async (id) => {
  // console.log(id);
  return await getDoc(doc(db, "users", id));
};
export default async function getScheduledPost(req, res) {
  const data = await getDocs(collection(db, "scheduledpost"));

  const postArray = [];

  data.forEach((doc) => {
    postArray.push(doc.data());
  });

  let response = await Promise.all(
    postArray.map((data) => {
      let post = data.post;
      return Promise.all(
        post.map(async (post) => {
          const userId = post.userid;
          const date = JSON.stringify(post.date);
          const postData = post.post;

          const getUserData = await GetUserDetails(userId);

          const hashnodeKey = getUserData.data().hashnodeKey;
          const devKey = getUserData.data().devKey;
          const mediumKey = getUserData.data().mediumKey;
          let response = {
            userId,
            postData,
            key: JSON.stringify({
              hashnodeKey,
              devKey,
              mediumKey,
            }),
            date,
          };

          return response;
        })
      );
    })
  );

  res.send(response);
}
