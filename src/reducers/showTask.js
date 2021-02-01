const showTask = (state=null, action) => {
    switch(action.type){
        case "SHOW_TASK":
            return action.task
        default: 
            return state
    }
}


export default showTask