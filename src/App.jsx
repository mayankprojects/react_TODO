import { act, useReducer, useState } from "react";
import Todoitems from "./components/Todoitems";
import Todos from "./components/Todos";
import Todostart from "./components/Todostart";
import Error from "./components/Error";
import { TodoContext } from "./store/todo-items-store";
import Todoitemwrapper from "./store/todo-items-store";

function App() {
  return (
    <>
      <Todoitemwrapper>
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
      </Todoitemwrapper>
    </>
  );
}

export default App;
