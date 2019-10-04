import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { Grid, Card, Input, Icon } from "semantic-ui-react";
import Axios from "axios";

class Actor extends Component {
  constructor() {
    super();
    this.state = {
      dataFilm: [],
      dataActor: []
    };
  }

  getDataFilm = () => {
    Axios.get(`http://api.tvmaze.com/search/shows?q=d`).then(res => {
      this.setState({
        dataFilm: res.data
      });
    });
  };

  getDataActor = () => {
    Axios.get(`http://api.tvmaze.com/search/people?q=b`).then(res => {
      this.setState({
        dataActor: res.data
      });
    });
  };

  pencarianActor = e => {
    if (e.target.value === "") {
      this.getDataActor();
    } else {
      Axios.get(`http://api.tvmaze.com/search/people?q=${e.target.value}`).then(
        res => {
          this.setState({
            dataActor: res.data
          });
        }
      );
    }
  };

  componentDidMount() {
    this.getDataFilm();
    this.getDataActor();
  }

  render() {
    return (
      <div>
        <Carousel
          autoPlay
          centerMode
          centerSlidePercentage={20}
          showStatus={false}
        >
          {this.state.dataFilm.map((data, key) => {
            var images = { ...data.show.image };

            if (data.show.images === null) {
              images =
                "https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg";
            } else {
              images = images.original;
            }

            return (
              <div key={key}>
                <img src={images} alt="" />
              </div>
            );
          })}
        </Carousel>

        <Grid style={{ marginTop: 20 }}>
          <Grid.Column width={4}>
            <Carousel
              autoPlay
              centerMode
              centerSlidePercentage={40}
              showStatus={false}
            >
              {this.state.dataActor.map((data, key) => {
                var images = { ...data.person.image };

                if (data.person.image === null) {
                  images =
                    "https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg";
                } else {
                  images = images.original;
                }
                return (
                  <div key={key}>
                    <img src={images} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </Grid.Column>

          <Grid.Column width={12}>
            <Input
              icon={{ name: "search", circular: true, link: true }}
              placeholder="Search..."
              onChange={e => {
                this.pencarianActor(e);
              }}
            />
            <Grid style={{ marginTop: 20 }}>
              {this.state.dataActor.map((data, key) => {
                var images = { ...data.person.image };

                if (data.person.image === null) {
                  images =
                    "https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg";
                } else {
                  images = images.original;
                }

                return (
                  <Grid.Column width={4}>
                    <Card
                      image={images}
                      header={data.person.name}
                      meta={data.person.gender}
                      extra={
                        <Icon name="star">
                          <p>{data.score}</p>
                        </Icon>
                      }
                    />
                  </Grid.Column>
                );
              })}
            </Grid>
          </Grid.Column>
        </Grid>
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
