import { api } from "./api";

export const login = async (userEmail: string): Promise<boolean> => {
    const data: any = await api;

    if (userEmail !== data.email) {
        return false;
    }

    return true;
};
