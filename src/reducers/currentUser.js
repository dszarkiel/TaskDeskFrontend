const currentUser = (state=null, action) => {
    switch(action.type){
        case "LOG_IN_USER":
            return {
                id: action.user.id,
                first_name: action.user.first_name,
                last_name: action.user.last_name,
                email: action.user.email,
            }
        case "LOG_OUT_USER":
            return null
        default:
            return state
    }
}


export default currentUser