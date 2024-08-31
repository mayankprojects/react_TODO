import Todos from "./Todos";
export default function Todoitems({ taskObj, handleDelete }) {
  return (
    <>
      {taskObj.map((item, index) => (
        <Todos key={index} task={item.name} date={item.dueDate} handleDelete = {handleDelete} ></Todos>
      ))}
    </>
  );
}
