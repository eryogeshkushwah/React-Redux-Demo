export const addTask = (value) => {
  return {
    type: "ADD_TASK",
    payload: value,
  };
};
export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
};
export const completeTask = (id) => {
  return {
    type: "MARK_TASK_COMPLETED",
    payload: id,
  };
};
