//import React from "react";
import React, { Component } from "react";
import { Input } from "@material-ui/core";

class InputField extends Component {
  state = {};
  render() {
    return (
      <div className="inputField">
        <Input
          className="txt-email"
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={(e) => this.props.onChange(e.target.value)}
        ></Input>
      </div>
    );
  }
}

export default InputField;
