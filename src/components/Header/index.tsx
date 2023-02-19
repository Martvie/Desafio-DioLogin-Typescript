import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../contexts/AppContext";
import { changeLocalStorage } from "../../services/storage";
import { Button } from "../Button";

const HeaderContainer = styled.header`
    width: 100%;
    height: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #f7b32b;

    & > * {
        margin: 2rem;
    }
`;

const MainText = styled.h1`
    font-size: 2rem;
`;

export const Header = () => {
    const navigate = useNavigate();
    const { setIsLogged, isLogged } = useContext(AppContext);

    const logout = () => {
        navigate("/");
        changeLocalStorage({login: false});
        setIsLogged(false);
    };

    return (
        <HeaderContainer>
            <MainText>Dio Bank</MainText>

            {isLogged && <Button name="Sair" event={logout} />}
        </HeaderContainer>
    );
};
