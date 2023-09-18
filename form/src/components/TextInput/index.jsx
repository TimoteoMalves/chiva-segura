import React from "react";
import { View, Text, TextInput } from "react-native";

const TextInputField = ({ label, name, value, onChange, placeholder, error }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
      />
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
};

const styles = {
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
  },
  error: {
    color: "red",
    fontSize: 12,
  },
};

export default TextInputField;
