import React, { Component } from "react";
import { Button } from "@material-ui/core";

class SubmitButton extends Component {
  state = {};
  render() {
    return (
      <div className="submitButton">
        <Button
          className="btn btn-primary"
          disabled={this.props.disabled}
          onClick={() => this.props.onClick()}
        >
          {this.props.text}
        </Button>
      </div>
    );
  }
}

export default SubmitButton;
