import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { AppContext } from "../../contexts/AppContext";

import { login } from "../../services/login";
import { changeLocalStorage } from "../../services/storage";
import { Button } from "../Button";
import { Input } from "../Input";

const InputWrapper = styled.main`
    width: 25rem;
    height: 35rem;
    border-radius: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #9d69a3;
`;

const Title = styled.h1`
    font-size: 2rem;
`;

const FormContainer = styled.form`
    min-height: 80%;
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;



export const Form = () => {
    const [email, setEmaiil] = useState<string>("");
    const navigate = useNavigate();
    const {setIsLogged}  = useContext(AppContext)

    const validadeUser = async (email: string) =>{
        const loggedIn = await login(email);

        if(!loggedIn){
            return alert('Email Inválido')
        }

        setIsLogged(true);
        changeLocalStorage({login: true});
        navigate('/conta/1');
    }
   
    return (
        <InputWrapper>
            <Title>Faça o login</Title>

            <FormContainer>
                <Input
                    label={"email"}
                    descritor={"Email"}
                    value={email}
                    onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                    ): void => {
                        setEmaiil(event.target.value);
                    }}
                />
                <Input label={"password"} descritor={"Senha"} />

                <Button name={"Logar"} event={() =>validadeUser(email)} />
            </FormContainer>
        </InputWrapper>
    );
};
