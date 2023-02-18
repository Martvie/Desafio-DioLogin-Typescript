import { createContext, useState } from "react";

interface IAppContext {
    user: string;
    isLogged: boolean;
    setIsLogged: (isLogged: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

 export const AppProvider = ({children}: any) =>{

    const [isLogged, setIsLogged] = useState<boolean>(false)

    const user = 'Marcus';
    return(
        <AppContext.Provider value={{user, isLogged, setIsLogged}}>
            {children}
        </AppContext.Provider>
    )
}