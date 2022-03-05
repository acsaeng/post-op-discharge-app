// const loginReducer = (state=[0, 0, 'awaiting login'], action) => {
const loginReducer = (state=[], action) => {
    switch (action.type){
        case 'LOGGED IN':
            console.log('inside login reducer')
            console.log('action.userInfo')
            console.log(action.userInfo)
            state = action.userInfo
            return state;
        default:
            state=[8, 8, 'Patient']
            console.log('initial state')
            console.log(state)
            return state;
    }
}
export default loginReducer;