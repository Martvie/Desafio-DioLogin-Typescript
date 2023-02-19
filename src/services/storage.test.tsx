import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage";

describe('Local Storage', () =>{

    
    const dioBank = {
        login: false
    }

    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');

    it('Deve retornar o objeto no local storage chamando o DioBank', () =>{

        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
        getAllLocalStorage();

        expect(mockGetItem).toHaveBeenCalledWith('diobank');
    })

    it('Deve Criar um objeto no local storage', () =>{
        createLocalStorage();
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank));

    })

    it('Deve alterar o objeto no local storage', () =>{
        
        changeLocalStorage(dioBank);
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank));

    })
})