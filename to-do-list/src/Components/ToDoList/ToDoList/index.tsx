import useQuery from "../../../hooks/useQuery";
import { ToDoAddForm } from "../ToDoAddForm";
import { ToDoItem } from "../ToDoItem";
import { CONSTANTS as API_CONSTANTS } from "../../../api/constants";
import { CSpinner } from "@coreui/react";
import { ToDo } from "./types";
import "./index.css";

export const ToDoList: React.FC = () => {
  const {
    data: todos,
    isLoading,
    isInitialLoading,
    error,
    refetch: refetchToDos,
  } = useQuery<ToDo[]>(API_CONSTANTS.TODOS_URL);

  return (
    <div className="content">
      <ToDoAddForm onMutateFn={refetchToDos} />

      {!isInitialLoading && todos.length > 0 && (
        <ul className="toDoList">
          {todos?.map((todo) => (
            <ToDoItem key={todo.id} toDoItem={todo} onMutateFn={refetchToDos} />
          ))}
        </ul>
      )}
      {todos.length === 0 && <div>there is no to do 😕</div>}
      {error?.length ? <div className="error">{error}</div> : ""}
      {isLoading && <CSpinner />}
    </div>
  );
};
