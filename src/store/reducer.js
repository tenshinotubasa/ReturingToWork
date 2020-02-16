import {ACT_UPDATE_PERSON_INFO, ACT_UPDATE_TOUCH_HIST, ACT_UPDATE_BACK_INFO, } from '../action/actionTypes'

const defaultState = {
    personalInf:{name:'', depart:'', phoneName:'', addr:'', pos:''},
    touchHist:{touch:[], health:[], other:''},
    backInfo:{backDate:'', transport:'', viaWH:'', other:''},
    pStatus:false,
    tStatus:false,
    bStatus:false
}

export default (state = defaultState, action)=>{
    if (action.type === ACT_UPDATE_PERSON_INFO){
        let newState = JSON.parse(JSON.stringify(state));
        newState.personalInf = action.value;
        newState.pStatus = action.status;
        return newState;
    }
    
    if (action.type === ACT_UPDATE_TOUCH_HIST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.touchHist = action.value;
        newState.tStatus = action.status;
        return newState;
    }
    
    if (action.type === ACT_UPDATE_BACK_INFO){
        let newState = JSON.parse(JSON.stringify(state));
        newState.backInfo = action.value;
        newState.bStatus = action.status;
        return newState;
    }
    return state;
}