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
    const mockpassword = '1234';
    window.alert = mockAlert;

    // moackApi.api = jest.fn().mockImplementation();

    it("Deve redirecionar o usuário caso o email e senha sejam válidos", async () => {
        const response = await login(mockEmail, mockpassword);
        expect(response).toBeTruthy();
    });

    it("Deve exibir um erro caso o email seja inválido", async () =>{ 

        const response = await login('email@invalido.com', mockpassword);
        expect(response).toBeFalsy();    
    })

    it("Deve exibir um erro caso a senha seja inválida", async () =>{ 
        const response = await login(mockEmail, '5674');
        expect(response).toBeFalsy();    
    })
});
