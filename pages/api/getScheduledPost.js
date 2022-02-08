import { collection, query, getDocs, getDoc, doc } from "@firebase/firestore";
import { auth, db } from "../../firebase/firebase";

const GetUserDetails = async (id) => {
  return await getDoc(doc(db, "users", id));
};
export default async function getScheduledPost(req, res) {
  const data = await getDocs(collection(db, "scheduledpost"));

  const arr = [];
  data.forEach((doc) => arr.push(doc.data()));
  res.send(arr);
}
