import {useContext} from "react";
import { Route, Routes } from "react-router-dom";
import { Conta } from "./components/pages/Conta";
import { Home } from "./components/pages/Home";
import { AppContext } from "./contexts/AppContext";

export const MaiRoutes = () => {
    const {isLogged} = useContext(AppContext)

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conta/:id" element={isLogged? <Conta /> : <Home/>} />
        </Routes>
    );
};
