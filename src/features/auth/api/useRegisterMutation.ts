import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { register } from "./authApi";

export const useRegisterMutation = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: register,
        onSuccess: () => {
            navigate('/register/success', { replace: true });
        },
        onError: (error) => {
            //TODO: mostrar error al usuario con toast o algo asi
            console.error('Register failed:', error);
        }
    });
};