import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { Grid, Card, Input, Icon } from "semantic-ui-react";

var Images = [
  "https://cdn.pixabay.com/photo/2015/03/26/09/43/lenses-690179__480.jpg",
  "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__480.jpg",
  "https://cdn.pixabay.com/photo/2014/10/31/17/41/dancing-dave-minion-510835__480.jpg",
  "https://cdn.pixabay.com/photo/2016/01/22/08/17/banner-1155437__480.png",
  "https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg",
  "https://cdn.pixabay.com/photo/2017/12/18/13/03/grain-3026099__480.jpg",
  "https://cdn.pixabay.com/photo/2015/05/15/09/13/demonstration-767982__480.jpg",
  "https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__480.jpg"
];

class Actor extends Component {
  render() {
    return (
      <div>
        <Carousel
          autoPlay
          centerMode
          centerSlidePercentage={40}
          showStatus={false}
        >
          {Images.map((data, key) => {
            return (
              <div key={key}>
                <img src={data} alt="" />
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
              {Images.map((data, key) => {
                return (
                  <div key={key}>
                    <img src={data} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </Grid.Column>
          <Grid.Column width={4}>
            <Input
              icon={{ name: "search", circular: true, link: true }}
              placeholder="Search..."
            />

            <Grid style={{ marginTop: 20 }}>
              <Grid.Column>
                <Card
                  image="https://cdn.pixabay.com/photo/2015/05/15/09/13/demonstration-767982__480.jpg"
                  header="Contoh Nama"
                  meta="Status"
                  description="description"
                  extra={
                    <Icon name="star">
                      <p>"user"</p>
                    </Icon>
                  }
                />
              </Grid.Column>
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
