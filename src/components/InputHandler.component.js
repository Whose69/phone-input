import React from "react";

export class InputHandler extends React.Component {
  turnToNumber = inputText => {
    return inputText.match(/\d/g) === null
      ? ""
      : inputText.match(/\d/g).join("");
  };

  handleNumberInput(event) {
    const inputValue = event.target.value;
    let inputPhoneNumberValue = this.turnToNumber(inputValue);
    let formattedInputPhoneNumberValue = "";
    if (!inputValue.includes(")") && inputValue.includes("(")) {
      if (inputPhoneNumberValue.length !== 1) {
        formattedInputPhoneNumberValue =
          "(" +
          inputPhoneNumberValue.slice(0, inputPhoneNumberValue.length - 1) +
          new Array(4 - inputPhoneNumberValue.length + 1).join(" ") +
          ")";
        inputPhoneNumberValue = inputPhoneNumberValue.slice(
          0,
          inputPhoneNumberValue.length - 1
        );
      } else {
        formattedInputPhoneNumberValue = "";
        inputPhoneNumberValue = "";
      }
    } else {
      formattedInputPhoneNumberValue =
        "(" +
        inputPhoneNumberValue.slice(
          0,
          Math.min(3, inputPhoneNumberValue.length)
        ) +
        new Array(4 - Math.min(3, inputPhoneNumberValue.length)).join(" ") +
        ")";
      if (inputPhoneNumberValue.length > 3) {
        formattedInputPhoneNumberValue +=
          " " +
          inputPhoneNumberValue.slice(
            3,
            Math.min(6, inputPhoneNumberValue.length)
          );
        if (inputPhoneNumberValue.length > 6) {
          formattedInputPhoneNumberValue +=
            "-" +
            inputPhoneNumberValue.slice(
              6,
              Math.min(10, inputPhoneNumberValue.length)
            );
          if (inputPhoneNumberValue.length > 10) {
            formattedInputPhoneNumberValue = inputPhoneNumberValue;
          }
        }
      }
    }
    this.props.onChange(inputPhoneNumberValue, formattedInputPhoneNumberValue);
  }

  render() {
    return (
      <div className="phone-input-contatiner">
        <form>
          <div className="form-input-row">
            <input
              className="phone-input"
              type="tel"
              placeholder="Start typing a phone number"
              value={this.props.formattedUSStandardState}
              onChange={this.handleNumberInput.bind(this)}
            />
          </div>
          <div className="form-input-row">
            <div className="formatted-phone-input-row">
              {"Value: " + this.props.inputPhoneNumberState}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
