import React, { Component } from "react";
import { connect } from "react-redux";

class Film extends Component {
  render() {
    return (
      <div>
        <p>Halaman Film</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return dispatch({
    type: "ACTIVE_ITEM",
    ActiveItem: "film"
  });
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Film);
