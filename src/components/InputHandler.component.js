import React from "react";

export class InputHandler extends React.Component {
  turnToNumber = inputText => {
    return inputText.match(/\d/g).join("");
  };

  handleNumberInput(event) {
    const input = event.target.value;
    const inputPhoneNumber = this.turnToNumber(input);
    let formattedInputPhoneNumber = "";
    if (
      !input.includes(")") &&
      input.includes("(") &&
      inputPhoneNumber.length === 1
    ) {
      formattedInputPhoneNumber = "";
    } else if (!input.includes(")") && input.includes("(")) {
      formattedInputPhoneNumber =
        "(" + inputPhoneNumber.slice(0, inputPhoneNumber.length - 1) + ")";
    } else if (inputPhoneNumber.length > 10) {
      formattedInputPhoneNumber = inputPhoneNumber;
    } else if (inputPhoneNumber.length > 6) {
      formattedInputPhoneNumber =
        "(" +
        inputPhoneNumber.slice(0, 3) +
        ") " +
        inputPhoneNumber.slice(3, 6) +
        "-" +
        inputPhoneNumber.slice(6, inputPhoneNumber.length);
    } else if (inputPhoneNumber.length > 3) {
      formattedInputPhoneNumber =
        "(" +
        inputPhoneNumber.slice(0, 3) +
        ") " +
        inputPhoneNumber.slice(3, inputPhoneNumber.length);
    } else if (inputPhoneNumber.length > 0) {
      formattedInputPhoneNumber =
        "(" + inputPhoneNumber.slice(0, inputPhoneNumber.length) + ")";
    }
    this.props.onChange(formattedInputPhoneNumber);
  }

  render() {
    return (
      <div className="input-contatiner">
        <input
          className="phone-input"
          type="tel"
          placeholder="Start typing a phone number"
          value={this.props.formattedUSStandardState}
          onChange={this.handleNumberInput.bind(this)}
        />
      </div>
    );
  }
}
