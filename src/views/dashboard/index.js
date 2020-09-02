import React, {Component} from 'react';
import {
  Container,
  Grid
} from '@material-ui/core';
import Page from '../../components/Page';
import Budget from './Budget';
import Sales from './Sales';
import * as actions from "../../store/actions/DashboardBuilder";
import {connect} from "react-redux";



class Dashboard extends Component {

  state = {
    purchasing: false
  }

  componentDidMount () {
    this.props.onInitDashboard();
  }
  render() {

    return (
        <Page
            title="Dashboard"
        >
          <Container maxWidth={false}>
            <Grid container spacing={3} style={{
              marginTop: '2px'
            }}>
              {
                !!this.props && !!this.props.cards ? this.props.cards.map(b => {
                  return (
                      <Grid item lg={4} sm={6} xl={4} xs={12}>
                        <Budget data={b}/>
                      </Grid>)
                }) : null
              }
              <Grid item lg={12} md={12} xl={12} xs={12}>{
                !!this.props && !!this.props.cards ?
                    <Sales barData={[{color: this.props.cards[0].color}, {color: this.props.cards[1].color}]}/>
                    : null
              }
              </Grid>
            </Grid>
          </Container>
        </Page>
    );
  }
};
const mapStateToProps = state => {
  return {
    cards: state.dashboard.cards,
    lineBar: state.dashboard.lineBar
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onInitDashboard: () => dispatch(actions.initDashboardData()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
