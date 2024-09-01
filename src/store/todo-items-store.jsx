import { createContext } from "react";

export const TodoContext = createContext({
    items: [],
    handleAdd: () => {},
    handleDelete: () => {},
});
// export const TodoContext = createContext([{name: "buy milk", dueDate: "today"}]);


