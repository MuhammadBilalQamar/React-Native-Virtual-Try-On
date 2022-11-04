import { ref, set } from "firebase/database";
import { db } from "@config";

const writeUserData = (userId, name, type, email, imageUrl) => {
  set(ref(db, "users/" + userId), {
    userId,
    username: name?.trim(),
    email: email?.trim(),
    type: type,
    imageUrl:
      imageUrl ||
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU",
    // profile_picture: imageUrl
  });
};

export default writeUserData;
