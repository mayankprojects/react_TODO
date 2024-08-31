import { useState } from "react";
import Todoitems from "./components/Todoitems";
import Todos from "./components/Todos";
import Todostart from "./components/Todostart";
import Error from "./components/Error";

function App() {
  let [items, setItems] = useState([]);

  const handleAdd = (task, date) => {

    let tempObj = {name: task, dueDate: date}
    let temp = [...items, tempObj];
    setItems(temp);
  }

  const handleDelete = (todoItem) => {
      let tempObj = items.filter((ele) => ele.name !== todoItem);
      setItems(tempObj);  
  }

  return (
    <>
      <div className="container flex h-full justify-center items-center flex-col mt-12">
        <h2 className="font-bold text-3xl text-center mb-4 mr-32">Todo App</h2>
        <div className="main">
          <Todostart handleAdd = {handleAdd}></Todostart>
          {items.length == 0 && <Error></Error>}
          <Todoitems taskObj = {items} handleDelete = {handleDelete}></Todoitems>
        </div>
      </div>
    </>
  );
}

export default App;
