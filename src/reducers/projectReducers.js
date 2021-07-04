import {
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  TASK_LIST_FAIL,
  TASK_LIST_REQUEST,
  TASK_LIST_SUCCESS,
} from '../constants/projectConstants';

export const projectListReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECT_LIST_REQUEST:
      return { loading: true, projects: [] };
    case PROJECT_LIST_SUCCESS:
      return { loading: false, projects: action.payload };
    case PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const taskListReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case TASK_LIST_REQUEST:
      return { loading: true, ...state };
    case TASK_LIST_SUCCESS:
      return { loading: false, tasks: action.payload };
    case TASK_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
