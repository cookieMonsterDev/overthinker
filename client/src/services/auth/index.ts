import {
  AuthResponse,
  RegisterUserServisePayload,
  loginUserServisePayload,
} from "./types";
import { Api } from "@/lib/axios";

export const loginUserServise = async (
  payload: loginUserServisePayload
): Promise<AuthResponse> => {
  try {
    const { data } = await Api.post("/auth/login", payload);

    return data as AuthResponse;
  } catch (error) {
    throw error;
  }
};

export const registerUserServise = async (
  payload: RegisterUserServisePayload
): Promise<AuthResponse> => {
  try {
    const { data } = await Api.post("/auth/register", payload);

    return data as AuthResponse;
  } catch (error) {
    throw error;
  }
};
