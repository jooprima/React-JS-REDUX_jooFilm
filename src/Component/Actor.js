import React, { Component } from "react";
import { connect } from "react-redux";

class Actor extends Component {
  render() {
    return (
      <div>
        <p>Halaman Actor</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return dispatch({
    type: "ACTIVE_ITEM",
    ActiveItem: "actor"
  });
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Actor);
