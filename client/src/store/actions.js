import store from './index';

export const update_query = (query) =>{
store.dispatch({type:"UPDATE_NAME",payload:query})
}

export const update_compare = (compare) =>{
store.dispatch({type:"UPDATE_COMPARE",payload:compare})
}


export const update_options = (option) =>{
    store.dispatch({type:"UPDATE_OPTIONS",payload:option}) 
}

export const update_user = (userinfo) =>{
    store.dispatch({type:"UPDATE_USER",payload:userinfo}) 
}