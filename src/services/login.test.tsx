import { login } from "./login";
// import * as moackApi  from "./api";

describe("Login", () => {
    const mockAlert = jest.fn();
    const mockEmail = 'marcus@dio.bank';
    window.alert = mockAlert;

    // moackApi.api = jest.fn().mockImplementation();

    it("Deve exibir um alert de boas vindas caso o email seja válido", async () => {
        await login(mockEmail);
        expect(mockAlert).toBeCalled();
        expect(mockAlert).toHaveBeenCalledWith(`Bem vinde ${mockEmail}! Você será redirecionado em segundos!`);
    });

    it("Não deve chamar disparar a frase sem o nome do usuário", async () => {
        await login(mockEmail);
        expect(mockAlert).not.toHaveBeenCalledWith("Bem vinde!");
    });

    it("Deve exibir um erro caso o email seja inválido", async () =>{ 
        await login('email@invalido.com')

        expect(mockAlert).toBeCalledWith('Email inválido')
    })
});
