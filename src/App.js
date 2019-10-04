import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import Beranda from "./Component/Beranda";

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Menu pointing inverted color="blue">
          <Menu.Item
            name="home"
            active={this.props.activeItem === "home"}
            onClick={this.goTo.bind(this, "home")}
          />
          <Menu.Item
            name="film"
            active={this.props.activeItem === "film"}
            onClick={this.goTo.bind(this, "film")}
          />
          <Menu.Item
            name="actor"
            active={this.props.activeItem === "actor"}
            onClick={this.goTo.bind(this, "actor")}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              {!isAuthenticated() && (
                <Button onClick={this.login.bind(this)} color="green">
                  Log In
                </Button>
              )}
              {isAuthenticated() && (
                <Button onClick={this.logout.bind(this)} color="red">
                  Log Out
                </Button>
              )}
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        {this.props.activeItem === "beranda" && <Beranda />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeItem: state.activeItem
  };
};

export default connect(mapStateToProps)(App);
