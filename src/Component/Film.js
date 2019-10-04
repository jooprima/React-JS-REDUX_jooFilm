import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Image, Input, Card, Icon } from "semantic-ui-react";
import Axios from "axios";

class Film extends Component {
  constructor() {
    super();
    this.state = {
      dataFilm: []
    };
  }

  getData = () => {
    Axios.get(`http://api.tvmaze.com/search/shows?q=a`).then(res => {
      this.setState({
        dataFilm: res.data
      });
    });
  };

  pencarian = e => {
    Axios.get(`http://api.tvmaze.com/search/shows?q=${e.target.value}`).then(
      res => {
        this.setState({
          dataFilm: res.data
        });
      }
    );
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg" />
              <Image style={{marginTop:20}} src="https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg" />
              <Image style={{marginTop:20}} src="https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Input
                icon={{ name: "search", circular: true, link: true }}
                placeholder="Search..."
                onChange={e => {
                  this.pencarian(e);
                }}
              />

              <Grid style={{ marginTop: 10 }}>
                {this.state.dataFilm.map((data, key) => {
                  var images = { ...data.show.image };
                  var ratings = { ...data.show.rating };

                  if (data.show.images === null) {
                    images =
                      "https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg";
                  } else {
                    images = images.original;
                  }

                  if (ratings.average === null) {
                    ratings = 0;
                  } else {
                    ratings = ratings.average;
                  }

                  return (
                    <Grid.Column width={5}>
                      <Card
                        image={images}
                        header={data.show.name}
                        meta={"status" + data.show.status}
                        description={data.show.language}
                        extra={
                          <Icon name="star">
                            {" "}
                            <p>{ratings}</p>{" "}
                          </Icon>
                        }
                      />
                    </Grid.Column>
                  );
                })}
              </Grid>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src="https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
