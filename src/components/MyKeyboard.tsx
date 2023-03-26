import Button from "./Button";
import { styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";
import { useState } from "react";

export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState<Number | null>(null);

  const handleNumberPress = (buttonValue: any) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: any) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        console.log(result);

        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        console.log(result);

        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        console.log(result);

        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        console.log(result);

        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  const firstNumberDisplay = () => {
    // If the result is not null, it displays the result with a certain style based on its value.
    if (result !== null) {
      return (
        <div
          style={
            result < 99999
              ? [styles.screenFirstNumber, { color: myColors.result }]
              : [
                  styles.screenFirstNumber,
                  { fontSize: 30, color: myColors.result },
                ]
          }
        >
          {result?.toString()}
        </div>
      );
    }
    // If the firstNumber has a length less than 6, it displays the number as it is.
    if (firstNumber && firstNumber.length < 6) {
      return <p style={styles.screenFirstNumber}>{firstNumber}</p>;
    }
    // If the firstNumber is empty, it displays 0.
    if (firstNumber === "") {
      return <p style={styles.screenFirstNumber}>{"0"}</p>;
    }
    // If the length of the firstNumber is between 6 and 7, it displays the number with a font size of 70.
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <p style={{ ...styles.screenFirstNumber, fontSize: 70 }}>
          {firstNumber}
        </p>
      );
    }
    // If the length of the firstNumber is greater than 7, it displays the number with a font size of 50.
    if (firstNumber.length > 7) {
      return (
        <p style={{ ...styles.screenFirstNumber, fontSize: 50 }}>
          {firstNumber}
        </p>
      );
    }
  };

  return (
    <div style={{ ...styles.viewBottom }}>
      <div
        style={{
          height: "60%",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        <span style={{ display: "flex" }}>
          <p style={styles.screenSecondNumber}>{secondNumber} </p>
          <p style={{ color: "purple", fontSize: 30, fontWeight: "500" }}>
            {operation}
          </p>
        </span>
        <span>{firstNumberDisplay()} </span>
      </div>
      <div style={styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button
          title="+/-"
          isGray
          onPress={() => {
            handleOperationPress("+/-");
          }}
        />
        <Button
          title="%"
          isGray
          onPress={() => {
            handleOperationPress("%");
          }}
        />
        <Button
          title="÷"
          isBlue
          onPress={() => {
            handleOperationPress("/");
          }}
        />
      </div>
      <div style={styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="x" isBlue onPress={() => handleOperationPress("*")} />
      </div>
      <div style={styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
      </div>
      <div style={styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
      </div>
      <div style={styles.row}>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button
          title="Del"
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Button title="=" isBlue onPress={() => getResult()} />
      </div>
    </div>
  );
}
