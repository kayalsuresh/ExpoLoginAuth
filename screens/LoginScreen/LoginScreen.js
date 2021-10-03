import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LoginScreenStyles from "./LoginScreenStyles";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { auth } from "../../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  useEffect(() => {
    const listenerHandler = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return listenerHandler;
  }, []);

  const registerHandler = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const loginHandler = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView
      style={LoginScreenStyles.container}
      behavior="padding"
    >
      <View style={LoginScreenStyles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={LoginScreenStyles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={LoginScreenStyles.input}
          secureTextEntry
        />
      </View>

      <View style={LoginScreenStyles.buttonContainer}>
        <TouchableOpacity
          onPress={loginHandler}
          style={LoginScreenStyles.button}
        >
          <Text style={LoginScreenStyles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={registerHandler}
          style={[LoginScreenStyles.button, LoginScreenStyles.buttonOutline]}
        >
          <Text
            style={[
              LoginScreenStyles.buttonText,
              LoginScreenStyles.buttonOutlineText,
            ]}
          >
            Register!!
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
