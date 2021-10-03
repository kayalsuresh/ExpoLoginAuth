import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { auth } from "../../firebase";
import HomeScreenStyles from "./HomeScreenStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  const logoutHandler = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={HomeScreenStyles.container}>
      <Text> You are logged in as: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={logoutHandler} style={HomeScreenStyles.button}>
        <Text style={HomeScreenStyles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
