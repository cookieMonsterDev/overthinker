import { Api } from "@/lib/axios";
import { loginUserServisePayload } from "./types";

export const loginUserServise = async (payload: loginUserServisePayload) => {
  try {
    const { data } = await Api.post("/auth/login", payload);

    return data;
  } catch (error) {
    throw error;
  }
};