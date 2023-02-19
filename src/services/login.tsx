import { api } from "./api";

export const login = async (userEmail: string, userPassword: string): Promise<boolean> => {
    const data: any = await api;

    if (userEmail !== data.email || userPassword !== data.password) {
        return false;
    }

    return true;
};
