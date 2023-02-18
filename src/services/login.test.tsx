import { login } from "./login";
// import * as moackApi  from "./api";

// const mockSetIsLogged = jest.fn();
// const mockNavigate = jest.fn();

// jest.mock('react', () =>({
//     ...jest.requireActual('react'),
//     useContext: () =>({
//         setIsLogged: mockSetIsLogged
//     })
// }))

// jest.mock('react-router-dom', () =>({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }))

describe("Login", () => {
    const mockAlert = jest.fn();
    const mockEmail = 'marcus@dio.bank';
    window.alert = mockAlert;

    // moackApi.api = jest.fn().mockImplementation();

    it("Deve redirecionar o usuário caso o email seja válido", async () => {
        const response = await login(mockEmail);
        expect(response).toBeTruthy();
    });

    it("Deve exibir um erro caso o email seja inválido", async () =>{ 

        const response = await login('email@invalido.com');
        expect(response).toBeFalsy();    
    })
});
