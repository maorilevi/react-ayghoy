import {updateObject} from "../../shared/utility";
import * as actionTypes from "../actions/ActionTypes";
import {initCovid19Data} from "..";
import {fetchDataFromApi} from "../actions/Covid19Builder";

const initialState = {
    parameters: null,
    response: null,
    selectedRow: null
};
const setCovid19Data = (state, action) => {
    return updateObject( state, {
        parameters: action.parameters,
        response: action.response,
        selectedRow: action.selectedRow
    } );
};
const selectedRow = (state, action) => {
    console.log(action, state);
    let selectRow = state.response[action.action];
    return updateObject( state, {
        parameters: state.parameters,
        response: state.response,
        selectedRow: selectRow
    } );
}
const fetchCovid19DataFailed = (state, action) => {
    return updateObject( state, { error: true } );
};
const fetchCovid19DataStart = (state, action) => {
    if (state.response === null) {
        const res = fetch('https://covid-193.p.rapidapi.com/history?day=2020-06-02&country=usa',{
            headers:{
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "d48d540977msh3fa07820543a991p154cb1jsn3f9c7a3051fb"
            }
        })
        .then((response) => response.json())
        .then((responseData) => {
           return setCovid19Data(state, actionTypes.SET_COVID19_DATA);
        });
        return res;
    } else {
        return updateObject( state, {
            parameters: state.parameters,
            response: state.response,
            selectedRow: state.selectedRow
        });
    }

};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_COVID19_DATA_FROM_API: return initCovid19Data();
        case actionTypes.FETCH_COVID19_DATA_START: return fetchCovid19DataStart(state, action);
        case actionTypes.SET_COVID19_DATA: return setCovid19Data(state, action);
        case actionTypes.SELECT_ROW: return selectedRow(state, action);
        case actionTypes.FETCH_COVID19_DATA_FAIL: return fetchCovid19DataFailed(state, action);
        default: return state;
    }
};
export default reducer;
