const initial = [];

function nextTodoId(state) {
  const maxId = state.reduce((maxId, state) => Math.max(state.id, maxId), -1);
  return maxId + 1;
}

export const addToList = (state = initial, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    case "DELETE_TASK":
      return state.filter((list) => list.id !== action.payload);

    case "MARK_TASK_COMPLETED":
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          console.log(todo);
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    default:
      return state;
  }
};
