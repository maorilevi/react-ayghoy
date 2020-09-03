import React from "react";
import { useNavigate } from 'react-router-dom';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import moment from 'moment';
import * as actions from "../../../store/actions/Covid19Builder";
import {connect} from "react-redux";

const MyRow = (props) => {
    let row = props.row;
    let rowIndex = props.rowIndex;
    let navigate = useNavigate();
    let time = moment(row.time).format('HH:mm');
    function handleClick() {
        console.log(props.onSelectedRow(props.rowIndex));
        navigate('/app/details?row=' + rowIndex);
    };
    return (<TableRow onClick={handleClick}>
        <TableCell>{time}</TableCell>
        <TableCell>{row.deaths.new}</TableCell>
        <TableCell>{row.deaths.total}</TableCell>
        <TableCell>{row.tests.total}</TableCell>
        <TableCell>{row.cases.active}</TableCell>
        <TableCell>{row.cases.critical}</TableCell>
    </TableRow>);
};
const mapStateToProps = state => {
    return {
        parameters: state.covid19.parameters,
        response: state.covid19.response,
        selectedRow: state.covid19.selectedRow
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onSelectedRow: (index) => dispatch(actions.selectRow(index))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MyRow);
