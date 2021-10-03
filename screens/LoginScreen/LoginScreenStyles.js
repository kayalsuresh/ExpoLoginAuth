import { StyleSheet } from "react-native";

const LoginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    width: "80%",
  },

  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },

  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  button: {
    backgroundColor: "#333",
    color: "#FFF",
    width: "100%",
    padding: 7,
    borderRadius: 10,
  },

  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    color: "#cc5500",
    borderColor: "#333",
    borderWidth: 2,
  },

  buttonText: {
    fontSize: 16,
    color: "white",
    alignSelf: "center",
  },
  buttonOutlineText: {
    color: "#333",
  },
});

export default LoginScreenStyles;
