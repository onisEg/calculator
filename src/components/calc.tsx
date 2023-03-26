import "../styles/Switch.modul.css";
import "../styles/Calc.modul.css";
import { useState } from "react";
import { myColors } from "./../styles/Colors";
import { ThemeContext } from "./../context/ThemeContext";
import MyKeyboard from "./MyKeyboard";

export default function Calc() {
  const [theme, setTheme] = useState("light");

  function switcher() {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  }

  const styles = {
    Container: {
      backgraundColor: myColors.light,
      
      
    },
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div className="clacbg">
          <div
            className="calc"
            style={
              theme === "light"
                ? styles.Container
                : {
                    backgroundColor: (styles.Container.backgraundColor =
                      "#17171c"),
                  }
            }
          >
            <div className=" w-100 d-flex justify-content-center pt-3">
              <label className="switch">
                <input type="checkbox" onClick={switcher} />
                <span className="slider" />
              </label>
            </div>
            <div className="w-100 d-flex justify-content-center">
              <MyKeyboard /> 
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}
