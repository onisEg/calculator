import { myColors } from "./Colors";


export const styles = {
  //Button
  btnBlue: {
    width : 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: myColors.blue,
    display: "grid",
    placeItems: "center",
    margin: 8,
    cursor:"pointer"
  },
  btnDark: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: myColors.btnDark,
    display: "grid",
    placeItems: "center",
    margin: 8,
    cursor:"pointer"
  },
  btnLight: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: myColors.light,
    display: "grid",
    placeItems: "center",
    margin: 8,
    cursor:"pointer"
  },
  btnGray: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: myColors.btnGray,
    display: "grid",
    placeItems: "center",
    margin: 8,
    cursor:"pointer"
  },
  smallTextLight: {
    fontSize: 25,
    color: myColors.white,
  },
  smallTextDark: {
    fontSize: 25,
    color: myColors.black,
  },
  // keyboard
  row: {
    maxWidth: "100%",
    justifyContent:"center",

    flexDirection: "row",
    display: "flex",
  },
  viewBottom: {
    position: "absolute",
    bottom: 100,
    // transform: "translateX(17)",
    
  },
  screenFirstNumber: {
    fontSize: 60,
    color: myColors.gray,
    fontWeight: "200",
    
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 30,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
    
  },
};