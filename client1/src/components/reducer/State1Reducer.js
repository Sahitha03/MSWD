const initState = [null, 0];
function State1Reducer(state=initState, action) {
    switch(action.type) {
        case "Login":
            state[0] = action.data.un;
            state[1] = action.data.role;
            return state;        
           
        case "Logout":
            state[0] = null;
            state[1] = 0;
            return state;
        default:
            return state;
    }

}
export default State1Reducer;





//action = {type:"Login", data:{un:"User1",role:"1"}}