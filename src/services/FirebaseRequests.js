import { ref, onValue, set } from "firebase/database";
import { db } from "@config";

export default class FirebaseRequests {
  static writeUserData(userId, name, type, email) {
    return new Promise((resolve, reject) => {
      try {
        const user = { userId, name, type, email };
        set(ref(db, "users/" + userId), {
          userId,
          username: name,
          email: email,
          type: type,
        });
        resolve(user);
      } catch (error) {}
    });
  }

  static readUserData(userId) {
    return new Promise((resolve, reject) => {
      const refference = ref(db, `users/` + userId);
      let user = null;
      onValue(refference, (snapshot) => {
        user = snapshot.val();
        if (user) {
          resolve(user);
        } else {
          reject("ERROR! in finiding a user");
        }
      });
    });
  }
}
