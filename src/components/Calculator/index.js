import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { Container, KeyBoard, Keys, Screen, Valor } from "./styles";

export default function Calculator({ props }) {
  const [valor, setValor] = useState("");

  function clear() {
    setValor("");
  }
  function back() {
    let exp = valor;
    setValor(exp.substring(0, exp.length - 1));
  }
  function equals() {
    if (valor) {
      let exp = eval(valor);
      setValor(exp.toString());
    }
  }
  function add(item) {
    setValor("" + valor + item);
  }

  const keys = [
    { value: 1, insert: () => add("1") },
    { value: 2, insert: () => add(2) },
    { value: 3, insert: () => add(3) },
    { value: 4, insert: () => add(4) },
    { value: 5, insert: () => add(5) },
    { value: 6, insert: () => add(6) },
    { value: 7, insert: () => add(7) },
    { value: 8, insert: () => add(8) },
    { value: 9, insert: () => add(9) },
    { value: <i class="fab fa-cuttlefish"></i>, insert: clear },
    { value: <i class="fas fa-backspace"></i>, insert: back },
    { value: <i class="fas fa-divide"></i>, insert: () => add("/") },
    { value: <i class="fas fa-times"></i>, insert: () => add("*") },
    { value: 0, insert: () => add(0) },
    { value: <i class="fas fa-minus"></i>, insert: () => add("-") },
    { value: <i class="fas fa-plus"></i>, insert: () => add("+") },
    { value: ".", insert: () => add(".") },
    { value: <i class="fas fa-equals"></i>, insert: equals }
  ];

  function handleKey(event) {
    setValor(event.target.value);
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      equals();
    }
  }
  function OnKeyPress() {
    let keyToPress = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "backspace",
      "enter",
      "+",
      "-",
      "*",
      "/",
      ".",
      "del"
    ];
    return (
      <KeyboardEventHandler
        handleKeys={keyToPress}
        onKeyEvent={(key, e) => {
          switch (key) {
            case "0":
              add(key);
              break;
            case "1":
              add(key);
              break;
            case "2":
              add(key);
              break;
            case "3":
              add(key);
              break;
            case "4":
              add(key);
              break;
            case "5":
              add(key);
              break;
            case "6":
              add(key);
              break;
            case "7":
              add(key);
              break;
            case "8":
              add(key);
              break;
            case "9":
              add(key);
              break;
            case "backspace":
              back();
              break;
            case "enter":
              equals();
              break;
            case "+":
              add(key);
              break;
            case "-":
              add(key);
              break;
            case "/":
              add(key);
              break;
            case "*":
              add(key);
              break;
            case ".":
              add(key);
              break;
            case "del":
              clear();
              break;
          }
        }}
      />
    );
  }

  return (
    <Container>
      <OnKeyPress />
      <KeyBoard>
        {keys.map(key => (
          <Keys onClick={key.insert}>{key.value}</Keys>
        ))}
      </KeyBoard>
      <Screen>
        <Valor
          value={valor}
          disabled
          onChange={handleKey}
          onKeyPress={handleKeyPress}
        />
      </Screen>
    </Container>
  );
}
