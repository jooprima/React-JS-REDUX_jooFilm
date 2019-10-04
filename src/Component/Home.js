import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel autoPlay centerMode centerSlidePercentage={40} showStatus>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__480.jpg"
              alt=""
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__480.jpg"
              alt=""
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__480.jpg"
              alt=""
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
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
