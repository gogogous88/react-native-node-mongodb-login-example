import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const bgcolor = "#16a085";
export default {
  width: width,
  bgcolor: bgcolor,
  bgImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    item: {
      borderColor: bgcolor,
      borderBottomWidth: 2,
      marginTop: 10
    },
    label: {
      position: "relative",
      color: bgcolor,
      top: -2
    }
  },
  card: {
    width: width - 50,
    backgroundColor: "#fff",
    height: 450,
    padding: 10,
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: "center",
    top: -50
  },
  iconContainer: {
    position: "relative",
    width: 100,
    top: 55,
    marginTop: -55,
    marginBottom: 55,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#3b484e",
    justifyContent: "center",
    elevation: 3,
    zIndex: 9
  },
  icon: {
    textAlign: "center",
    fontSize: 50,
    color: "#fff"
  },
  signUpCard: {
    width: width - 50,
    backgroundColor: "#fff",
    height: 450,
    padding: 10,
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    elevation: 2,
    shadowOpacity: 0.9,
    shadowRadius: 2,
    justifyContent: "center",
    position: "absolute",
    marginTop: 390,
    left: 10
  },
  text: { color: bgcolor, fontSize: 18 },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(22, 160, 133, 0.1)"
  },
  floatBtn: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: bgcolor,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  switch: {
    width,
    flexDirection: "row",
    justifyContent: "space-between"
  }
};
