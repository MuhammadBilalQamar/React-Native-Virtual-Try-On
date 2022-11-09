// REACT COMPONENTS
import React from "react";
import { SafeAreaView } from "react-native";

// REACT NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/index";

import "react-native-gesture-handler";

// REDUX ELEMENTS FOR LOCAL DATA STORAGE
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@redux/_store";

// DISABLED YELLOW WARNINGS
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(); //Ignore all logs in production mode

// APPLICATION ROOT COMPONENT
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
