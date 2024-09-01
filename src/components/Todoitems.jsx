import { TodoContext } from "../store/todo-items-store";
import { useContext } from "react";

import Todos from "./Todos";
export default function Todoitems() {

  const {items, handleDelete} = useContext(TodoContext);
  return (
    <>

      {items.map((item, index) => (
        <Todos key={index} task={item.name} date={item.dueDate} handleDelete = {handleDelete} ></Todos>
      ))}
    </>
  );
}
