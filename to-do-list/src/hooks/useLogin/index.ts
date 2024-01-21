import axios from "axios";
import { useState } from "react";
import { CONSTANTS as API_CONSTANTS } from "../../api/constants";
import { useNavigate } from "react-router-dom";
import { loginData } from "./types";

function useLogin() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = (loginData: loginData) => {
    setError(null);
    setIsLoading(true);
    axios({
      method: "post",
      withCredentials: true,
      url: API_CONSTANTS.SERVER + API_CONSTANTS.LOGIN_URL,
      data: loginData,
    })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, error, login };
}

export default useLogin;
