import useMutation from "../useMutation";
import { CONSTANTS as API_CONSTANTS } from "../../api/constants";
import { ToDo } from "../../Components/ToDoList/ToDoList/types";

function useToDoUpdate(id: string, onSuccessFn?: () => any) {
  const { isLoading, error, resData, mutate } = useMutation<
    ToDo,
    Partial<ToDo>
  >({
    url: `${API_CONSTANTS.TODOS_URL}/${id}`,
    method: "PUT",
    onSuccessFn: onSuccessFn,
  });

  return { isLoading, error, resData, mutate };
}

export default useToDoUpdate;
