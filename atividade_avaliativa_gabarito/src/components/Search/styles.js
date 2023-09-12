import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 16,
    marginTop: '8%',
    width: "90%",
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#F1F3F9",
  },
  input: {
    backgroundColor: "#ffffff",
    borderColor: '#C5C5C7',
    borderWidth: 1,
    borderRadius: 4,
    width: "90%",
    height: 36,
    paddingLeft: 8
  },
  iconSearch: {
    marginLeft: 8,
    transform: [{ scaleX: -1 }],
  }
});

export default styles;