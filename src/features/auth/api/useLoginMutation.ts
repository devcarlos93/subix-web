import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { login } from "./authApi";
import {toast} from "sonner";

export const useLoginMutation = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            localStorage.setItem('access_token', data.access_token);
            navigate('/dashboard', { replace: true });
            toast.success('Bienvenido!', {
                description: 'Has iniciado sesión correctamente.',
                duration: 5000,
            });
        },
         onError: (error) => {
            //TODO: mostrar error al usuario con toast o algo asi
            console.error('Login failed:', error);
        }
    });
};``