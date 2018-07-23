import React from "react";
import "./App.css";
import { InputHandler } from "./components/InputHandler.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPhoneNumber: "",
      formattedUSStandard: ""
    };
  }

  changeFormattedNumber(inputPhoneNumberValue, formattedUSStandardValue) {
    this.setState({
      inputPhoneNumber: inputPhoneNumberValue,
      formattedUSStandard: formattedUSStandardValue
    });
  }

  render() {
    return (
      <InputHandler
        onChange={this.changeFormattedNumber.bind(this)}
        inputPhoneNumberState={this.state.inputPhoneNumber}
        formattedUSStandardState={this.state.formattedUSStandard}
      />
    );
  }
}

export default App;
