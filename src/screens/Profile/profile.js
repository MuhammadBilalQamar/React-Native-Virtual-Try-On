import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FullScreenLoader, GradientStyle } from "@components";
import * as ImagePicker from "expo-image-picker";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

//FIREBASE REQUESTS
import { FirebaseRequests, writeUserData } from "@services";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

//ICONS
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

//UTILITIES
import { BaseColor, storage } from "@config";

//CONSTANTS
import { MESSAGES } from "@constants/constants";

// REDUX ELEMENTS FOR LOCAL DATA STORAGE
import { logoutUser, saveUser } from "@redux/reducers/user/action";
import { useDispatch, useSelector } from "react-redux";

const MyProfile = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const [userName, setUserName] = useState(userData?.username);

  // this will call first time and fetch current user details and render it in user interface
  useEffect(() => {
    try {
      const unsubscribe = navigation.addListener("focus", async () => {});
      return unsubscribe;
    } catch (error) {
      console.log("error <==>", error);
      setIsLoading(false);
    }
  }, [navigation]);

  // this is native function for picking image from local mobile gallery
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      const image = result.uri;
      await uploadImage(image);
    }
  };

  // this function will take image file as an input and update that file in firebase storage
  const uploadImage = async (file) => {
    let response = await fetch(file);
    let blob = await response.blob();
    const storageRef = ref(storage, `profiles/${userData?.userId}`);
    const uploadTask = uploadBytesResumable(storageRef, blob);
    setIsLoading(true);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(Math.round(progress) || 0);
        switch (snapshot.state) {
          case "paused":
            // console.log("Upload is paused");
            break;
          case "running":
            // console.log("Upload is running");
            break;
        }
      },
      (error) => {
        setIsLoading(false);
        setUploadProgress(0);
        alert(MESSAGES.IMAGE_UPLOAD_FAIL_ERROR);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const imageUrl = downloadURL;
          writeUserData(
            userData?.userId,
            userData?.username,
            "customer",
            userData?.email,
            imageUrl
          );
          setIsLoading(false);
          setUploadProgress(0);
          fetchUser();
        });
      }
    );
  };

  // this is a reusable function that will fetch the current user data from firebase
  const fetchUser = async () => {
    const newUser = await FirebaseRequests.readUserData(userData?.userId);
    dispatch(saveUser(newUser));
  };

  // this is a logout function
  const handleLogout = () => {
    Alert.alert("Are you sure!", MESSAGES.LOGOUT_CONFIRMATION, [
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

  // this will remove current user data once user will click on logout button
  const removeLocalUser = async () => {
    try {
      dispatch(logoutUser());
      setIsLoading(false);
      setUploadProgress(0);
      setUserName("");
      navigation.navigate("Login");
    } catch (error) {
      console.log("error----", error);
      alert(MESSAGES.SOMETHING_WRONG);
    }
  };

  // this will update current user data
  const handleUpdate = async () => {
    if (userData?.username != userName) {
      setIsLoading(true);
      writeUserData(
        userData?.userId,
        userName,
        "customer",
        userData?.email,
        userData?.imageUrl
      );
      const newUser = await FirebaseRequests.readUserData(userData?.userId);
      if (newUser) {
        dispatch(saveUser(newUser));
        setIsLoading(false);
        alert(MESSAGES.USER_UPADETED_SUCCESSFULLY);
      }
    }
  };

  // this is the ui renderation part
  return (
    <GradientStyle style={styles.container}>
      <FullScreenLoader
        show={isLoading}
        text={"Loading"}
        setShow={() => {}}
        progress={uploadProgress}
        showProgress={true}
      />

      {/* TOP HEADER Avatar WITH NAME */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image style={styles.avatar} source={{ uri: userData?.imageUrl }} />
          {userData?.userId && (
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
          <Text style={styles.name}>{userData?.username || "xxxxxx"}</Text>
        </View>
      </View>

      {/* MAIN CONTENT */}
      {userData && (
        <ScrollView style={styles.body}>
          <Text style={styles.inputLabel}>Username</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInputStyle}
              color="#004084"
              placeholder={userData?.username}
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
              placeholder={userData?.email}
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
                  userData?.username?.trim() == userName?.trim() ||
                  userName?.trim().length == 0
                    ? 0.5
                    : 1,
              },
            ]}
          >
            {userData?.username?.trim() == userName?.trim() ||
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

// these are the styles for Profile screen GUI
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
  body: {},
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
