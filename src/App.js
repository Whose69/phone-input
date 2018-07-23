import React from "react";
import "./App.css";
import { InputHandler } from "./components/InputHandler.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formattedUSStandard: ""
    };
  }

  changeFormattedNumber(formattedUSStandardValue) {
    this.setState({
      formattedUSStandard: formattedUSStandardValue
    });
  }

  render() {
    return (
      <InputHandler
        onChange={this.changeFormattedNumber.bind(this)}
        formattedUSStandardState={this.state.formattedUSStandard}
      />
    );
  }
}

export default App;
