import { act, useReducer, useState } from "react";
import Todoitems from "./components/Todoitems";
import Todos from "./components/Todos";
import Todostart from "./components/Todostart";
import Error from "./components/Error";
import { TodoContext } from "./store/todo-items-store";

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
function App() {
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
        <div className="container flex h-full justify-center items-center flex-col mt-12">
          <h2 className="font-bold text-3xl text-center mb-4 mr-32">
            Todo App
          </h2>
          <div className="main">
            <Todostart></Todostart>
            <Error></Error>
            <Todoitems></Todoitems>
          </div>
        </div>
      </TodoContext.Provider>
    </>
  );
}

export default App;
