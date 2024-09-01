// import { useState } from "react";
import { useRef } from "react";
import { MdOutlineAddComment} from "react-icons/md";


export default function Todostart({handleAdd}) {
  // const [task, setTask] = useState("");
  // const [date, setDate] = useState("");
  
  const currTask = useRef('');
  const currDate = useRef('');

  const handleaddClick = () => {
    handleAdd(currTask.current.value, currDate.current.value);
    currTask.current.value = '';
    currDate.current.value = '';
  }

  return (
    <>
      <div className="box grid grid-cols-3 gap-3">
        <input
          type="text"
          placeholder="Enter Todo here"
          className="p-3 text-xl focus:outline-none border-2 border-black rounded-lg"
          // value={task}
          // onChange={(e) => {setTask(e.target.value)}}
          ref={currTask}
        />
        <input
          type="date"
          className="p-3 text-xl focus:outline-none border-2 border-black rounded-lg"
          // value={date}
          // onChange={(e) => {setDate(e.target.value)}}
          ref={currDate}
        />
        <button className="text-slate-100 bg-green-600 w-24 border rounded-lg" onClick={handleaddClick}>
        <MdOutlineAddComment className="text-2xl mx-auto"/>
        </button>
      </div>
    </>
  );
}
