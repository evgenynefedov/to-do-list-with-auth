import * as Icon from "react-bootstrap-icons";
import "./index.css";
import { Props } from "./types";
import useToDoDelete from "../../../hooks/useToDoDelete";
import useToDoUpdate from "../../../hooks/useToDoUpdate";
import { CSpinner } from "@coreui/react";

export const ToDoItem: React.FC<Props> = ({ toDoItem, onMutateFn }) => {
  const { mutate: toDoDelete, isLoading: isDeleting } = useToDoDelete(
    toDoItem.id,
    onMutateFn
  );
  const { mutate: toDoUpdate, isLoading: isUpdating } = useToDoUpdate(
    toDoItem.id,
    onMutateFn
  );

  return (
    <li key={toDoItem.id} className={toDoItem.done ? "done" : ""}>
      {isUpdating ? (
        <CSpinner size="sm" />
      ) : (
        <input
          type="checkbox"
          onChange={(e) => {
            console.log();
            toDoUpdate({ done: e.target.checked });
          }}
          checked={toDoItem.done}
          disabled={isUpdating}
        />
      )}
      {toDoItem.name}
      <button
        className="delete"
        onClick={() => {
          toDoDelete();
        }}
        disabled={isDeleting}
      >
        {isDeleting ? <CSpinner size="sm" /> : <Icon.Trash3Fill />}
      </button>
    </li>
  );
};
