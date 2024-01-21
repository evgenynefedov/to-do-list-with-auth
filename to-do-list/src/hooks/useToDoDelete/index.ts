import useMutation from "../useMutation";
import { CONSTANTS as API_CONSTANTS } from "../../api/constants";

function useToDoDelete(id: string, onSuccessFn?: () => any) {
  const { isLoading, error, resData, mutate } = useMutation({
    url: `${API_CONSTANTS.TODOS_URL}/${id}`,
    method: "DELETE",
    onSuccessFn: onSuccessFn,
  });

  return { isLoading, error, resData, mutate };
}

export default useToDoDelete;
