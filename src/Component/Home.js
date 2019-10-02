import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <p>Halaman Home</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return dispatch({
    type: "ACTIVE_ITEM",
    ActiveItem: "home"
  });
};

const mapStateToProps = () => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
