import { onAuthStateChanged } from "@firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "@firebase/firestore";
import React, { useState, createContext, useEffect, useContext } from "react";
import { auth, db } from "../firebase/firebase";
import { Encryptpayload } from "../components/lib/encoding";
import { v4 as uuidv4 } from "uuid";
export const DataContext = createContext({});

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [apiData, setApiData] = useState({
    title: undefined,
    contentMarkdown: undefined,
    coverImage: undefined,
    tags: [],
    postTo: [],
  });
  const [sendResponse, setResponse] = useState({
    medium: "",
    hashnode: "",
    dev: "",
  });
  const [UserData, setUserData] = useState(undefined);

  const SchedulePost = async (scheduledDate, userId) => {
    const uuid = uuidv4();
    const postData = {
      id: uuid,
      post: JSON.stringify(apiData),
      date: scheduledDate,
      userid: userId,
    };

    return await getDoc(doc(db, "scheduledpost", userId)).then(async (data) => {
      console.log(data.exists(), "Existed Data");
      if (data.exists()) {
        console.log("Exists");
        return await updateDoc(doc(db, "scheduledpost", userId), {
          post: arrayUnion(postData),
        });
      } else {
        console.log("Does Not Exits");
        return await setDoc(doc(db, "scheduledpost", userId), {
          post: arrayUnion(postData),
        });
      }
    });
  };
  const AddApiKey = {
    medium: (key, id) => {
      const mediumKey = Encryptpayload(key, id);
      return updateDoc(doc(db, "users", id), {
        mediumKey,
      });
    },
    hashnode: (key, id) => {
      const hashnodeKey = Encryptpayload(key, id);
      return updateDoc(doc(db, "users", id), {
        hashnodeKey,
      });
    },

    dev: (key, id) => {
      const devKey = Encryptpayload(key, id);
      return updateDoc(doc(db, "users", id), {
        devKey,
      });
    },
  };
  const AddUsers = async (firstName, lastName, email, id) => {
    return await setDoc(doc(db, "users", id), {
      firstName,
      lastName,
      email,
    });
  };
  const GetUserDetails = async (id) => {
    return await getDoc(doc(db, "users", id));
  };

  const GetScheduledPost = async (id) => {
    return await getDoc(doc(db, "scheduledpost", id));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        GetUserDetails(user.uid)
          .then((data) => {
            setUserData(data.data());
            console.log(UserData);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    apiData,
    setApiData,
    AddUsers,
    AddApiKey,
    GetUserDetails,
    UserData,
    SchedulePost,
    sendResponse,
    setResponse,
    GetScheduledPost,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
