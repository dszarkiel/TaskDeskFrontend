const tasks = (state= [], action) => {
    let updatedTasks;

    switch(action.type){
        case "LOG_IN_USER":
            return action.user.tasks
        case "ADD_TASK":
            return [...state, action.task]
        case "DELETE_TASK":
            updatedTasks = state.filter(taskObj => taskObj.id != action.id)
            return updatedTasks
        case "UPDATE_TASK":
            updatedTasks = state.map(taskObj => {
                if (taskObj.id == action.task.id ) {
                    return action.task
                } else {
                    return taskObj
                }
            })
            return updatedTasks
        case "COMPLETE_TASK":
            updatedTasks = state.map(taskObj => {
                if (taskObj.id == action.id) {
                    return {
                        ...taskObj, complete: true
                    }
                } else {
                    return taskObj
                }
            })
            return updatedTasks
        default: 
            return state
    }
}

export default tasks