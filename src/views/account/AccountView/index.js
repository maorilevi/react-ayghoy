import React, {Component} from 'react';
import {
    Container,
    Grid
} from '@material-ui/core';
import Page from '../../../components/Page';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as actions from "../../../store/actions/Covid19Builder";
import {connect} from "react-redux";
import * as moment from 'moment';
import { useNavigate } from 'react-router-dom';
import MyRow from "./SingleTableRow";

class Account extends Component {
    state = { purchasing: false };
    componentDidMount () {
        this.props.onInitCovid19Data();
    }
    render() {

        const dataGridStyle = {
            padding: '16px',
            textAlign: 'center',
            margin: '15px 0',
            fontFamily: 'sans-serif',
        }
        return (
            this.props && this.props.parameters?
            <Page
                title="Account">
                <Container maxWidth="lg">
                    <Grid container spacing={3} style={{marginTop: '2px', paddingBottom: '60px'}}>
                        <Grid container>
                            <Grid item lg={12}>
                                <h1 style={{
                                    textAlign: 'center',
                                    fontFamily: 'sans-serif',
                                    margin: '30px',
                                }}>COVID-19 HISTORY PAGE</h1>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item lg={6} md={6} xs={12} sm={6}>
                                <Paper style={dataGridStyle}>Country: {this.props.parameters.country}</Paper>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12} sm={6}>
                                <Paper style={dataGridStyle}>Day: {this.props.parameters.day}</Paper>
                            </Grid>
                        </Grid>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>TIME</TableCell>
                                        <TableCell>NEW DEATHS</TableCell>
                                        <TableCell>TOTAL DEATHS</TableCell>
                                        <TableCell>TOTAL TESTS</TableCell>
                                        <TableCell>ACTIVE</TableCell>
                                        <TableCell>CRITICAL</TableCell>

                                        {
                                            // Object.keys(this.props.response[0]).map((index, value) => {
                                            //     return  <TableCell>{index}</TableCell>
                                            // })
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.props.response.map((row, r_index) => {
                                            return <MyRow row={row} rowIndex={r_index}/>
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Container>
            </Page> : null
        );
    }
};
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
        onInitCovid19Data: () => dispatch(actions.initCovid19Data()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
