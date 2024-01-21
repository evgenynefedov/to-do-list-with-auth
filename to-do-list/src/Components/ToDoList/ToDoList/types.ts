export interface Props {
  todos: ToDo[];
}

export type ToDo = {
  id: string;
  name: string;
  done: boolean;
};

//used for practising writing reducer to manage the state, it's not relevant using the classical RESTful API approach
export enum ActionType {
  add = "add",
  toggle = "toggle",
  delete = "delete",
}

//used for practising writing reducer to manage the state, it's not relevant using the classical RESTful API approach
export type ToDoActions =
  | { type: ActionType.add; payload: { name: string } }
  | { type: ActionType.toggle | ActionType.delete; payload: { id: string } };
