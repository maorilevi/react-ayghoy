import React, {Component} from 'react';
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import history from "../../history";
import * as actions from "../../store/actions/Covid19Builder";
import Page from "../../components/Page";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";

class SingleRowIndex extends Component {
    state = {
        purchasing: false
    }
    render() {
        let currentRow;
        this.props.onFetchData();
        if (history.location.search && this.props.response) {
            const row = +history.location.search.split('=')[1];
            currentRow = this.props.response[row];
        }
        return (<Page title="Account">
                    <Container maxWidth="lg">
                        <Grid>
                            <Grid container>
                                <Grid item lg={12}>
                                    <h1 style={{
                                        textAlign: 'center',
                                        fontFamily: 'sans-serif',
                                        margin: '30px',
                                    }}>DETAILS PAGE</h1>
                                </Grid>
                                <Grid item lg={12}>
                                    {
                                        this.props.selectedRow || currentRow?  <h3 style={{
                                            textAlign: 'center',
                                            fontFamily: 'sans-serif',
                                            margin: '30px',
                                        }}>Recovered: {this.props.selectedRow.cases['recovered']}</h3> : null
                                    }

                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Page>);
    }
}

const mapStateToProps = state => {
    return {
        parameters: state.covid19.parameters,
        response: state.covid19.response,
        selectedRow: state.covid19.selectedRow,
        navigate: useNavigate
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onSelectedRow: (index) => dispatch(actions.selectRow(index)),
        onFetchData: () => dispatch(actions.fetchCovid19DataStart())
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(SingleRowIndex);
