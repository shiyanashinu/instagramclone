//state S 
export const intialState = null
export const reducer = (state, action) => {
    if (action.type === 'USER') {
        // console.log('in payload',action.payload);
        return action.payload

    } if (action.type === 'CLEAR') {
        return null
    }
    if(action.type==='update'){
        return{
            ...state,
            followers:action.payload.followers,
            following:action.payload.following
        }
    }
    return state
}