import React from 'react'
import { TodoContext } from '../store/todo-items-store';
import { useContext } from 'react';
export default function Error() {
  const {items} = useContext(TodoContext);
  // const contextItems = useContext(TodoContext).items;
  // console.log(contextItems);
  return (
    <div>
      {items.length === 0 && <h2 className='ml-56 mt-8 text-xl'>Now more task to do...</h2>}
    </div>
  );
}
