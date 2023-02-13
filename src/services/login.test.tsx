import { login } from "./login";

describe("Login", () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;
    it("Deve exibir um alert ao chamar a função", () => {
        login();
        expect(mockAlert).toBeCalled();
    });

    it("Deve exibir um alert com a frase especificada", () => {
        login();
        expect(mockAlert).toHaveBeenCalledWith("Bem vindo! Você será redirecionado em segundos!");
    });
});
