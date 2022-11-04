import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  AsyncStorage,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FullScreenLoader, GradientStyle } from "@components";
import * as ImagePicker from "expo-image-picker";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

//FIREBASE REQUEST
import { FirebaseRequests, writeUserData } from "../../services";

//ICONS
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

//UTILITIES
import { getLocalData } from "@utils";
import { BaseColor, storage } from "../../config/index";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const MyProfile = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    try {
      const unsubscribe = navigation.addListener("focus", async () => {
        setIsLoading(true);
        const uid = await getLocalData("loggedInUseruid");
        const user = await FirebaseRequests.readUserData(uid);
        if (user) {
          setUser(user);
          setUserName(user?.username || "");
        }
        setIsLoading(false);
      });
      return unsubscribe;
    } catch (error) {
      console.log("error <==>", error);
      setIsLoading(false);
    }
  }, [navigation]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result);
    if (!result.cancelled) {
      const image = result.uri;
      await uploadImage(image);
    }
  };

  const uploadImage = async (file) => {
    let response = await fetch(file);
    let blob = await response.blob();
    const storageRef = ref(storage, `profiles/${user?.userId}`);
    const uploadTask = uploadBytesResumable(storageRef, blob);
    setIsLoading(true);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        setIsLoading(false);
        setUploadProgress(0);
        alert("Image upload failed due to network connectivity issue!");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const imageUrl = downloadURL;
          writeUserData(
            user?.userId,
            user?.username,
            "customer",
            user?.email,
            imageUrl
          );
          setIsLoading(false);
          setUploadProgress(0);
          fetchUser();
        });
      }
    );
  };

  const fetchUser = async () => {
    const newUser = await FirebaseRequests.readUserData(user?.userId);
    if (newUser) {
      setUser(newUser);
    }
  };

  const handleLogout = () => {
    Alert.alert("Are you sure?", "do you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => removeLocalUser(),
        style: "cancel",
      },
    ]);
  };

  const removeLocalUser = async () => {
    try {
      AsyncStorage.getAllKeys()
        .then((keys) => AsyncStorage.multiRemove(keys))
        .then(() => {
          setUser(null);
          setIsLoading(false);
          setUploadProgress(0);
          setImageUrl("");
          setUserName("");
          navigation.navigate("Login");
        })
        .catch((err) => {
          console.log("error----", err);
        });
    } catch (error) {
      console.log("error----", error);
      alert("something went wrong");
    }
  };

  const handleUpdate = async () => {
    if (user?.username != userName) {
      setIsLoading(true);
      writeUserData(
        user?.userId,
        userName,
        "customer",
        user?.email,
        user?.imageUrl
      );
      const newUser = await FirebaseRequests.readUserData(user?.userId);
      if (newUser) {
        setUser(newUser);
        setUserName(newUser?.username || "");
        setIsLoading(false);
        alert("user updated successfully");
      }
    }
  };

  return (
    <GradientStyle style={styles.container}>
      <FullScreenLoader
        show={isLoading}
        text={"Loading"}
        setShow={() => {}}
        progress={uploadProgress}
        showProgress={true}
      />

      {/* TOP HEADER AVARTAR WITH NAME */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                user?.imageUrl ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU",
            }}
          />
          {user?.userId && (
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 75,
                right: 125,
              }}
              onPress={pickImage}
            >
              <Feather
                name="edit"
                size={32}
                color={BaseColor.darkPrimaryColor}
              />
            </TouchableOpacity>
          )}
          <Text style={styles.name}>{user?.username || "xxxxxx"}</Text>
        </View>
      </View>

      {/* MAIN CONTENT */}
      {user && (
        <ScrollView style={styles.body}>
          <Text style={styles.inputLabel}>Username</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInputStyle}
              color="#004084"
              placeholder={user?.username}
              placeholderTextColor="#003f5c"
              clearText
              value={userName}
              onChangeText={(e) => setUserName(e)}
            />
          </View>
          <Text style={[styles.inputLabel, { marginTop: 15 }]}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.textInputStyle, { opacity: 0.5 }]}
              color="#004084"
              placeholder={user?.email}
              placeholderTextColor="#003f5c"
              clearText
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View
            style={[
              styles.logoutBtnContainer,
              {
                opacity:
                  user?.username?.trim() == userName?.trim() ||
                  userName?.trim().length == 0
                    ? 0.5
                    : 1,
              },
            ]}
          >
            {user?.username?.trim() == userName?.trim() ||
            userName?.trim().length == 0 ? (
              <Pressable style={styles.logoutBtn} disabled={true}>
                <MaterialCommunityIcons
                  name="update"
                  size={24}
                  color={"white"}
                  style={{ marginRight: 8 }}
                />
                <Text style={styles.logoutTextButton}>Update</Text>
              </Pressable>
            ) : (
              <TouchableOpacity style={styles.logoutBtn} onPress={handleUpdate}>
                <MaterialCommunityIcons
                  name="update"
                  size={24}
                  color={"white"}
                  style={{ marginRight: 8 }}
                />
                <Text style={styles.logoutTextButton}>Update</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={[styles.logoutBtnContainer, { marginTop: "5%" }]}>
            <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
              <Feather
                name="log-out"
                size={24}
                color="white"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.logoutTextButton}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </GradientStyle>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
    position: "relative",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "gray",
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  name: {
    fontSize: 18,
    color: BaseColor.darkPrimaryColor,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  btn: {
    marginLeft: "auto",
    width: 40,
    height: 40,
  },
  body: {
    // backgroundColor: "#E6E6FA",
  },
  username: {
    color: "#20B2AA",
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: BaseColor.grayColor,
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 5,
  },
  textInputStyle: {
    padding: 0,
    fontSize: 16,
  },
  inputLabel: {
    paddingLeft: 10,
    paddingBottom: 5,
    fontSize: 16,
    color: BaseColor.darkPrimaryColor,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  logoutBtnContainer: {
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  logoutBtn: {
    width: "76%",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? hp(4) : hp(5),
    backgroundColor: "#004282",
    display: "flex",
    flexDirection: "row",
  },
  logoutTextButton: {
    color: BaseColor.whiteColor,
    letterSpacing: 0.5,
    fontSize: 16,
  },
});

export default MyProfile;
