import { useReducer, useState } from "react";
import Todoitems from "./components/Todoitems";
import Todos from "./components/Todos";
import Todostart from "./components/Todostart";
import Error from "./components/Error";
import { TodoContext } from "./store/todo-items-store";

function App() {
  let [items, setItems] = useState([]);


  const handleAdd = (task, date) => {
    // let temp = [...items, {name: task, dueDate: date}];
    setItems((prev) => [...prev, { name: task, dueDate: date }]);
  };

  const handleDelete = (todoItem) => {
    let tempObj = items.filter((ele) => ele.name !== todoItem);
    setItems(tempObj);
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
