import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listTasks } from '../../actions/projectActions';

const Tasks = ({ projectId }) => {
  const dispatch = useDispatch();

  const taskList = useSelector(state => state.taskList);
  const { loading, error, tasks } = taskList;

  useEffect(() => {
    dispatch(listTasks(projectId));
  }, [dispatch, projectId]);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3 style={{ color: 'red' }}>{error}</h3>
      ) : (
        tasks.map(task => <p key={task._id}>{task.title}</p>)
      )}
    </div>
  );
};

export default Tasks;
