import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";

interface IAppContext {
    user: string;
    isLogged: boolean;
    setIsLogged: (isLogged: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

 export const AppProvider = ({children}: any) =>{

    const [isLogged, setIsLogged] = useState<boolean>(false);

    const storage = getAllLocalStorage();

    useEffect(() => {

        if(storage){
            const {login} = JSON.parse(storage);
            setIsLogged(login)
         }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    const user = 'Marcus';
    return(
        <AppContext.Provider value={{user, isLogged, setIsLogged}}>
            {children}
        </AppContext.Provider>
    )
}