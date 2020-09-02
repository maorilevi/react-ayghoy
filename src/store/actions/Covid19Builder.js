import * as actionTypes from "./ActionTypes";

export const setCovid19Data = ( data ) => {
    return {
        type: actionTypes.SET_COVID19_DATA,
        parameters: data.parameters,
        response: data.response,
        selectedRow: data.selectedRow
    };
};
export const selectRow = (index) => {
    return {
        type: actionTypes.SELECT_ROW,
        action: index
    };
};
export const fetchCovid19DataStart = () => {
    return {
        type: actionTypes.FETCH_COVID19_DATA_START,
    };
}
export const fetchDataFromApi = () => {
    return {
        type: actionTypes.FETCH_COVID19_DATA_FROM_API
    };
}
export const fetchCovid19Data = () => {
    return {
        type: actionTypes.FETCH_COVID19_DATA_FAIL
    };
};

export const initCovid19Data = () => {
    return dispatch => {
        fetch('https://covid-193.p.rapidapi.com/history?day=2020-06-02&country=usa',{
            headers:{
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "d48d540977msh3fa07820543a991p154cb1jsn3f9c7a3051fb"
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                dispatch(setCovid19Data(responseData));
            })
    };
};
