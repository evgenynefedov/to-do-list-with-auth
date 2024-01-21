import useMutation from "../useMutation";
import { CONSTANTS as API_CONSTANTS } from "../../api/constants";
import { ToDo } from "../../Components/ToDoList/ToDoList/types";

function useToDoAdd(onSuccessFn?: () => any) {
  const { isLoading, error, resData, mutate } = useMutation<ToDo, ToDo>({
    url: API_CONSTANTS.TODOS_URL,
    method: "POST",
    onSuccessFn: onSuccessFn,
  });

  return { isLoading, error, resData, mutate };
}

export default useToDoAdd;
