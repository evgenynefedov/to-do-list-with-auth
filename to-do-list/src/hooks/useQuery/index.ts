import { useEffect, useState } from "react";
import { fetchWithAuth } from "../../api/axiosInstance";

function useQuery<T>(url: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>([] as T);
  const [error, setError] = useState<string | null>(null);
  const [isStale, setIsStale] = useState<boolean>(false);
  const [isInitialLoading, setIsInitialLoading] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    setIsLoading(true);
    if (isInitialLoading === null) {
      setIsInitialLoading(true);
    }
    fetchWithAuth
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
        setIsInitialLoading(false);
      });
  }, [url, isStale]);

  const refetch = (): void => {
    setIsStale((v) => !v);
  };

  return { isLoading, isInitialLoading, data, error, refetch };
}

export default useQuery;
