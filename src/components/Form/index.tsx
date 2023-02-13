import styled from "styled-components";
import { login } from "../../services/login";
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
    return (
        <InputWrapper>
            <Title>Faça o login</Title>

            <FormContainer>
                <Input label={"email"} descritor={"Email"} />
                <Input label={"password"} descritor={"Senha"} />

                <Button name = {"Logar"} event={login}/>
            </FormContainer>
        </InputWrapper>
    );
};
