
import {ACT_UPDATE_PERSON_INFO, ACT_UPDATE_TOUCH_HIST, ACT_UPDATE_BACK_INFO} from './actionTypes'

export const updatePersonalInfo = (per, status)=>{
    const action = {type:ACT_UPDATE_PERSON_INFO, value:per, status:status};
    return action;
} 

export const updateTouchHist = (hist, status)=>{
    const action = {type:ACT_UPDATE_TOUCH_HIST, value:hist, status:status};
    return action;
}

export const updateBackInfo = (back, status)=>{
    const action = {type:ACT_UPDATE_BACK_INFO, value:back, status:status};
    return action;
}