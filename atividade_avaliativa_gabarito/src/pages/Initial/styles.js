import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    marginTop: 44,
    width: 325,
    height: 325,
    resizeMode: 'contain',
  },
  textContainer: {
    width: '70%',
    marginTop: 64,
    marginBottom: 64,
  },  
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '500'
  },
  subtitle: {
    paddingTop: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '400'
  },
  button: {
    borderRadius: 12,
    width: 240,
  },
  startBtn: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '500',
    padding: 15
  },
});

export default styles;
