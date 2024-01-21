import { useState, MouseEvent } from "react";
import "./index.css";
import { Props } from "./types";
import useToDoAdd from "../../../hooks/useToDoAdd";
import { generateId } from "../ToDoList/utilities";
import { CSpinner } from "@coreui/react";

export const ToDoAddForm: React.FC<Props> = ({ onMutateFn }) => {
  const [newToDo, setNewToDo] = useState<string>("");

  const {
    mutate: toDoAdd,
    error,
    isLoading: isAdding,
  } = useToDoAdd(() => {
    onMutateFn();
    setNewToDo("");
  });

  const onSumbit = (e: MouseEvent) => {
    e.preventDefault();
    if (newToDo.trim()) {
      toDoAdd({ id: generateId(), name: newToDo, done: false });
    }
  };

  return (
    <>
      <form className="toDoAddForm">
        <input
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
          type="text"
          name="newToDo"
          id="newToDoInput"
          disabled={isAdding}
        />
        <button
          onClick={(e) => {
            onSumbit(e);
          }}
          disabled={isAdding || newToDo.trim().length === 0}
        >
          {isAdding ? <CSpinner size="sm" /> : "Add"}
        </button>
      </form>
      {error?.length ? <div className="error">{error}</div> : ""}
    </>
  );
};
