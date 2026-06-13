import { apiClient } from "@shared/lib/api-client";
import type { LoginFormValues } from "../schemas/loginSchema";
import type { RegisterFormValues } from "../schemas/registerSchema";
import type { LoginResponseInterface, RegisterResponseInterface } from "../interfaces";

export const login = async (data: LoginFormValues) => {
    const resp = await apiClient.post<LoginResponseInterface>('/auth/login', data);
    return resp.data;
};

export const register = async (data: RegisterFormValues) => {
    const resp = await apiClient.post<RegisterResponseInterface>('/users', data);
    return resp.data;
};
