import * as actionTypes from "./ActionTypes";
import data from '../../assets/dashboard-data'

export const setDashboard = ( data ) => {
    return {
        type: actionTypes.SET_DASHBOARD_DATA,
        cards: data.cards,
        lineBar: data.lineBar
    };
};

export const fetchDashboard = () => {
    return {
        type: actionTypes.FETCH_DASHBOARD_FAIL
    };
};

export const initDashboardData = () => {
    console.log(data);
    return dispatch => {
        return new Promise((resolve, reject) => {
            if (data) {
                resolve(data);
            } else {
                reject(dispatch(fetchDashboard()));
            }
        }).then(result => {
            dispatch(setDashboard(result));
        });
    };
};
