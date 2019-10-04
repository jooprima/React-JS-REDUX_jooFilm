import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Image, Input, Card, Icon } from "semantic-ui-react";

class Film extends Component {
  render() {
    return (
      <div>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Input icon="search" placeholder="Search..." />

              <Grid style={{ marginTop: 10 }}>
                <Grid.Column width={5}>
                  <Card
                    image="https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg"
                    header="Elliot Baker"
                    meta="Friend"
                    description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
                    extra={<Icon name="user" />}
                  />
                </Grid.Column>
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
