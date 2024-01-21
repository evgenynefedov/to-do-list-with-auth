import { useState } from "react";
import { fetchWithAuth } from "../../api/axiosInstance";

function useMutation<resT = {}, reqT = undefined>(arg: {
  url: string;
  method: "POST" | "DELETE" | "PUT";
  onSuccessFn?: () => any;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [resData, setResData] = useState<resT>([] as resT);
  const [error, setError] = useState<string | null>(null);

  const mutate = (reqData?: reqT) => {
    setIsLoading(true),
      fetchWithAuth
        .request({
          url: arg.url,
          method: arg.method,
          data: reqData,
        })
        .then((res) => {
          setResData(res.data);
          if (arg?.onSuccessFn) {
            arg.onSuccessFn();
          }
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
  };

  return { isLoading, resData, error, mutate };
}

export default useMutation;
