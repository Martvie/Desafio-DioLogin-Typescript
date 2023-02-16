import Global from "./styles/global";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Conta } from "./components/pages/Conta";



function App() {
    return (
        <div className="App">
            <Global/>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/conta/:id" element={<Conta/>}/>
            </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
//TODO Continuar de 07min