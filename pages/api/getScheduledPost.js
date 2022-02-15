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

          const hashnode = getUserData.data().hashnodeKey;
          const dev = getUserData.data().devKey;
          const medium = getUserData.data().mediumKey;
          let response = {
            userId,
            postData,
            key: JSON.stringify({
              hashnode,
              dev,
              medium,
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
