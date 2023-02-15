import { api } from "./api";

export const login = async (userEmail: string): Promise<void> =>{
    const data: any = await api;

    if(userEmail !== data.email){
        return alert("Email inválido")
    }

    alert(`Bem vinde ${userEmail}! Você será redirecionado em segundos!`);
}