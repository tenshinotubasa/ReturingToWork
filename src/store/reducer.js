
const defaultState = {
    personalInfo:{name:'', depart:'', phoneName:'', addr:'', pos:''},
    touchInfo:{touch:[], health:[], other:''},
    backInfo:{backDate:'', transport:'', viaWH:'', other:''}
}

export default (state = defaultState, action)=>{
    return state
}