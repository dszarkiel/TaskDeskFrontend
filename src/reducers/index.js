import {combineReducers} from 'redux';
import tasksReducer from './tasks'
import currentUserReducer from './currentUser'
import showTaskReducer from './showTask'
 
export default combineReducers({
    tasks: tasksReducer,
    currentUser: currentUserReducer,
    showTask: showTaskReducer
})