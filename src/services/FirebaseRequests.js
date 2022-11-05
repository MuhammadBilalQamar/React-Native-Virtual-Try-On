import { ref, onValue, set } from "firebase/database";
import { db } from "@config";
import { PRODUCTS } from "../constants/constants";

export default class FirebaseRequests {
  // THIS WILL WIRTE THE USER DATA IN THE FIREBASE
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

  // THIS WILL READ THE USER DATA BY USER ID FROM THE FIREBASE
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

  // THIS WILL RETRIVE ALL PRODUCTS DATA FROM THE FIREBASE
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      resolve(PRODUCTS);
    });
  }

  // THIS WILL RETRIVE PRODUCT DATA BY PRODUCT ID FROM THE FIREBASE
  static getProductById(id) {
    return new Promise((resolve, reject) => {
      resolve(PRODUCTS.find((product) => product.id == id));
    });
  }
}
