import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    paddingBottom: 24,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  flatList: {
    width: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 4,
    textTransform: "uppercase",
    margin: 24,
    color: "#000000",
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    padding: 48,
    borderRadius: 4,
  },
  modalText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 36,
  },
  modalButton: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 4,
  },
});

export default styles;
