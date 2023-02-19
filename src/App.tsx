import Global from "./styles/global";

import { BrowserRouter } from "react-router-dom";

import { AppProvider } from "./contexts/AppContext";
import { MaiRoutes } from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./services/storage";



function App() {
    
    !getAllLocalStorage && createLocalStorage();

    return (
        <div className="App">
            <Global/>
            <BrowserRouter>
            <AppProvider>
            
                <MaiRoutes/>
            </AppProvider>
            </BrowserRouter>
            
        </div>
    );
}

export default App;