import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signup as signupApi } from "../services/apiAuth";
import { userLogin as userLoginApi } from "../services/apiAuth";
import { adminLogin as adminLoginApi } from "../services/apiAuth";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      localStorage.setItem("token", data?.data?.loginToken);
      toast.success(data?.message);
      localStorage.setItem("role", data?.data?.role);
      navigate("/user/home");
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred during signup");
    },
  });

  return { signup, isLoading };
}

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: userLogin, isLoading } = useMutation({
    mutationFn: userLoginApi,
    onSuccess: (data) => {
      localStorage.setItem("token", data?.data?.loginToken);
      toast.success(data?.message);
      localStorage.setItem("role", data?.data?.role);
      navigate("/user/home");
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred during login");
    },
  });

  return { userLogin, isLoading };
}

export function useAdminLogin() {
  const navigate = useNavigate();
  const { mutate: adminLogin, isLoading } = useMutation({
    mutationFn: adminLoginApi,
    onSuccess: (data) => {
      localStorage.setItem("token", data?.data?.loginToken);
      toast.success(data?.message);
      localStorage.setItem("role", data?.data?.role);
      navigate("/admin/home");
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred during admin login");
    },
  });

  return { adminLogin, isLoading };
}
