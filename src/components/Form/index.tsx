import { useEffect, useState } from "react";
import { api } from "../../services/api";

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

interface IUserData {
    name: string,
    email: string,
    password: string
}

export const Form = () => {
    const [email, setEmaiil] = useState<string>("");
    const [userData, setUserData] = useState<null| IUserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | IUserData = await api;
            setUserData(data)
        };

        getData();
    });

    return (
        <InputWrapper>
            <Title>Faça o login</Title>

            {userData === null  || userData === undefined &&
             <h1>Loading...</h1>
            }


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

                <Button name={"Logar"} event={() => login(email)} />
            </FormContainer>
        </InputWrapper>
    );
};
