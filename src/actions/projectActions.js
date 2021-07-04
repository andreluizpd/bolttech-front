import axios from 'axios';
import {
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  TASK_LIST_FAIL,
  TASK_LIST_REQUEST,
  TASK_LIST_SUCCESS,
} from '../constants/projectConstants';

export const listProjects = () => async dispatch => {
  try {
    dispatch({ type: PROJECT_LIST_REQUEST });

    const { data } = await axios.get('/api/projects', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGUwOTcyZjFmMjMyMjEyYWVkM2M5OTQiLCJlbWFpbCI6ImFuZHJlbHVpenBkQGdtYWlsLmNvbSIsIm5hbWUiOiJBbmRyZSBsdWl6IHBhc3RvcmUgZGFtYnJvcyIsImNyZWF0ZWRBdCI6IjIwMjEtMDctMDNUMTY6NTg6MjMuNTY4WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDctMDNUMTY6NTg6MjMuNTY4WiIsIl9fdiI6MCwic2Vzc2lvbiI6IjYwZTFlZDcxNDEzY2Y2MGI2Zjk5NDJlMiIsImlhdCI6MTYyNTQxOTEyMSwiZXhwIjoxNjI1NDIwMDIxfQ.38hMCUeY6QZHNnE9ENS_MfX3OTQjpwnWk2IuacJ-6z4',
        'x-refresh':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWxpZCI6dHJ1ZSwiX2lkIjoiNjBlMWVkNzE0MTNjZjYwYjZmOTk0MmUyIiwidXNlciI6IjYwZTA5NzJmMWYyMzIyMTJhZWQzYzk5NCIsInVzZXJBZ2VudCI6IlBvc3RtYW5SdW50aW1lLzcuMjguMSIsImNyZWF0ZWRBdCI6IjIwMjEtMDctMDRUMTc6MTg6NDEuMzE4WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDctMDRUMTc6MTg6NDEuMzE4WiIsIl9fdiI6MCwiaWF0IjoxNjI1NDE5MTIxLCJleHAiOjE2NTY5NzY3MjF9.JZYHGxPBSlV4hnwmhmCPaT4cczWD8VmYvtupPBaI_hc',
      },
    });

    dispatch({ type: PROJECT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROJECT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTasks = id => async dispatch => {
  try {
    dispatch({ type: TASK_LIST_REQUEST });

    const { data } = await axios.get(`/api/tasks/${id}`, {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGUwOTcyZjFmMjMyMjEyYWVkM2M5OTQiLCJlbWFpbCI6ImFuZHJlbHVpenBkQGdtYWlsLmNvbSIsIm5hbWUiOiJBbmRyZSBsdWl6IHBhc3RvcmUgZGFtYnJvcyIsImNyZWF0ZWRBdCI6IjIwMjEtMDctMDNUMTY6NTg6MjMuNTY4WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDctMDNUMTY6NTg6MjMuNTY4WiIsIl9fdiI6MCwic2Vzc2lvbiI6IjYwZTFlZDcxNDEzY2Y2MGI2Zjk5NDJlMiIsImlhdCI6MTYyNTQxOTEyMSwiZXhwIjoxNjI1NDIwMDIxfQ.38hMCUeY6QZHNnE9ENS_MfX3OTQjpwnWk2IuacJ-6z4',
        'x-refresh':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWxpZCI6dHJ1ZSwiX2lkIjoiNjBlMWVkNzE0MTNjZjYwYjZmOTk0MmUyIiwidXNlciI6IjYwZTA5NzJmMWYyMzIyMTJhZWQzYzk5NCIsInVzZXJBZ2VudCI6IlBvc3RtYW5SdW50aW1lLzcuMjguMSIsImNyZWF0ZWRBdCI6IjIwMjEtMDctMDRUMTc6MTg6NDEuMzE4WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDctMDRUMTc6MTg6NDEuMzE4WiIsIl9fdiI6MCwiaWF0IjoxNjI1NDE5MTIxLCJleHAiOjE2NTY5NzY3MjF9.JZYHGxPBSlV4hnwmhmCPaT4cczWD8VmYvtupPBaI_hc',
      },
    });

    dispatch({ type: TASK_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TASK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
