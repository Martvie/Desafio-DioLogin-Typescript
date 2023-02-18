import Global from "./styles/global";

import { BrowserRouter } from "react-router-dom";

import { AppProvider } from "./contexts/AppContext";
import { MaiRoutes } from "./routes";



function App() {
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
//TODO Continuar de 07min