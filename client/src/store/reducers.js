import { combineReducers } from 'redux';

function queryReducer(state={},{type,payload}) {
    if(type==="UPDATE_NAME")
        return payload

    return state
  }

function compareReducer(state=[],{type,payload}) {
    if(type==="UPDATE_COMPARE")
        return payload

    return state
  }

function optionReducer(state={},{type,payload}){
    if(type==="UPDATE_OPTIONS")
      return payload
    return state
}

function userinfoReducer(state={},{type,payload}){
    if(type==="UPDATE_USER")
      return payload
    return state
}

export const AllReducers= combineReducers({query:queryReducer,option:optionReducer,compare:compareReducer,userinfo:userinfoReducer})




