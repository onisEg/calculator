import { useContext, useState } from "react";
import { styles } from "../styles/GlobalStyles";
import { ThemeContext } from "./../context/ThemeContext";

interface ButtonProps {
  onPress: () => void,
  title: string,
  isBlue?: boolean,
  isGray?: boolean,
}






export default function Button({
  onPress,
  title,
  isBlue,
  isGray,
}: ButtonProps) {
  const theme = useContext(ThemeContext);

    return (
        <div
            style={
                isBlue
                    ? styles.btnBlue
                    : isGray
                        ? styles.btnGray
                        : theme === "light"
                            ? styles.btnLight
                            : styles.btnDark
      }
      onClick={onPress}
    >
      <div
        style={
          isBlue || isGray
            ? styles.smallTextLight
            : theme === "dark"
            ? styles.smallTextLight
            : styles.smallTextDark
        }
      >
        {title}
      </div>
    </div>
  );
}
