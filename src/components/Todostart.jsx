import { useState } from "react";

export default function Todostart({handleAdd,}) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  
  const handleaddClick = () => {
      handleAdd(task, date);
      setTask("");
      setDate("");
  }

  return (
    <>
      <div className="box grid grid-cols-3 gap-3">
        <input
          type="text"
          placeholder="Enter Todo here"
          className="p-3 text-xl focus:outline-none border-2 border-black rounded-lg"
          value={task}
          onChange={(e) => {setTask(e.target.value)}}
        />
        <input
          type="date"
          className="p-3 text-xl focus:outline-none border-2 border-black rounded-lg"
          value={date}
          onChange={(e) => {setDate(e.target.value)}}
        />
        <button className="text-slate-100 bg-green-600 w-24 border rounded-lg" onClick={handleaddClick}>
          Add
        </button>
      </div>
    </>
  );
}
