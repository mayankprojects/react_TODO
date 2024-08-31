function Todos({task, date, handleDelete}) {
  return (
    <>
      <div className="first grid grid-cols-3 gap-5 text-xl m-4 h-14">
        <p className="mt-4">{task}</p>
        <p className="mt-4">{date}</p>
        <button className="text-slate-100 bg-red-600 w-24 border rounded-lg" onClick={() => handleDelete(task)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Todos;
