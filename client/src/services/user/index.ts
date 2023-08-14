import { Api } from "@/lib/axios";
import { PublicUser } from "./types";

export const findUserByUsernameService = async (
  username: string
): Promise<PublicUser> => {
  try {
    const { data } = await Api.get(`/users?username=${username}`);

    return data;
  } catch (error) {
    throw error;
  }
};
