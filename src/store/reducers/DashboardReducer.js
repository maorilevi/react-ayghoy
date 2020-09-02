import {updateObject} from "../../shared/utility";
import * as actionTypes from "../actions/ActionTypes";

const initialState = {
    cards: null,
    lineBar: 4,
    error: false,
    building: false
};
const setDashboard = (state, action) => {
    return updateObject( state, {
        cards: action.cards,
        lineBar: action.lineBar,
        totalPrice: 4,
        error: false,
        building: false
    } );
};

const fetchDashboardDataFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_DASHBOARD_DATA: return setDashboard(state, action);
        case actionTypes.FETCH_DASHBOARD_FAIL: return fetchDashboardDataFailed(state, action);
        default: return state;
    }
};
export default reducer;
