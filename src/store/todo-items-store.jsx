import { Children, createContext } from "react";
import { useReducer } from "react";
export const TodoContext = createContext({
  items: [],
  handleAdd: () => {},
  handleDelete: () => {},
});
// export const TodoContext = createContext([{name: "buy milk", dueDate: "today"}]);

const Reducer = (currState, action) => {
  let newState = currState;
  if (action.type === "ADD") {
    newState = [
      ...currState,
      {
        name: action.payload.task,
        dueDate: action.payload.date,
      },
    ];
  } else if (action.type === "DELETE") {
    newState = currState.filter((ele) => ele.name !== action.payload.task);
  }
  return newState;
};

export default function Todoitemwrapper({children}) {
  let [items, Dispatch] = useReducer(Reducer, []);

  const handleAdd = (task, date) => {
    const addAction = {
      type: "ADD",
      payload: {
        task,
        date,
      },
    };
    Dispatch(addAction);
  };

  const handleDelete = (task) => {
    const delAction = {
      type: "DELETE",
      payload: {
        task,
      },
    };
    Dispatch(delAction);
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          items: items,
          handleAdd: handleAdd,
          handleDelete: handleDelete,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
}
