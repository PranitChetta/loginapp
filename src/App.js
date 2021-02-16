//import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { observer } from "mobx-react";
import { render } from "@testing-library/react";
import UserStore from "./stores/UserStores";
import LoginForm from "./LoginForm";
import SubmitButton from "./submitButton";
//import { Button } from "@material-ui/core";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {};
  // }

  async componentDidMount() {
    try {
      let res = await fetch("/isLoggedIn", {
        method: "post",
        hearders: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      let result = await res.json();
      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout() {
    try {
      let res = await fetch("/logout", {
        method: "post",
        hearders: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = "";
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    if (UserStore.loading) {
      return (
        <div className="App">
          <div className="container">Loading, please wait.....</div>
          Login with React
        </div>
      );
    } else {
      if (UserStore.isLoggedIn) {
        return (
          <div className="App">
            <div className="container">
              Welcome {UserStore.username}
              <SubmitButton
                text={"Log out"}
                disabled={false}
                onClick={() => this.doLogout()}
              ></SubmitButton>
            </div>
            Login with React
          </div>
        );
      }
      return (
        <div className="container-fluid">
          <LoginForm></LoginForm>
        </div>
      );
    }
  }
}

export default observer(App);
