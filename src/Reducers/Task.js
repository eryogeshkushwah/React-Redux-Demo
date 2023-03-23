const initial = [];

function nextId(state) {
 return state.length;
}

export const addToList = (state = initial, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: nextId(state),
          text: action.payload,
          completed: false,
        },
      ];
    case "DELETE_TASK":
      return state.filter((list) => list.id !== action.payload);

    case "MARK_TASK_COMPLETED":
      return state.map((mystate) => {
        if (mystate.id !== action.payload) {
          return mystate;
        }

        return {
          ...mystate,
          completed: !mystate.completed,
        };
      });

    default:
      return state;
  }
};
