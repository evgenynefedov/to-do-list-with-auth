import { ToDo, ToDoActions, ActionType } from "./types";

//used for practising writing reducer to manage the state, it's not relevant using the classical RESTful API approach
export function reducer(todos: ToDo[], action: ToDoActions) {
  switch (action.type) {
    case ActionType.add:
      return [
        ...todos,
        {
          id: generateId(),
          name: action.payload.name.trim(),
          done: false,
        },
      ];
    case ActionType.toggle:
      return todos.map((todo: ToDo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    case ActionType.delete:
      return todos.filter((todo: ToDo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

export const generateId = () => Math.random().toString(16).slice(2);
