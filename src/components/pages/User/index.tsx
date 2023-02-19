import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../../contexts/AppContext";
import { api } from "../../../services/api";
import { Header } from "../../Header";

interface IUserData {
    name: string;
    email: string;
    password: string;
    balance: number;
    id: string;
}

const Body = styled.body`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const UserInfoContainer = styled.div`
    width: 25rem;
    height: 20rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #fafafa;
    color: #000;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    font-size: 1.8rem;
`;

const Descritor = styled.p`
    font-size: 2rem;
    font-weight: 800;

    margin: 0.2rem;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
`;

const ButtonContainer = styled.button`
    width: 10rem;
    height: 2rem;

    border: 0;
    border-radius: 1rem;

    background-color: #D3C1D2;
    align-self: center;
`;

export const User: React.FC = () => {
    const [userData, setUserData] = useState<null | IUserData>();
    const { id } = useParams();
    const { isLogged } = useContext(AppContext);
    const navigate = useNavigate();

    !isLogged && navigate("/");

    useEffect(() => {
        const getData = async () => {
            const data: any | IUserData = await api;
            setUserData(data);
        };

        getData();
    });

    if (userData && id !== userData.id) {
        navigate("/");
    }

    return (
        <>
            <Header />
            <Body>
                <UserInfoContainer>
                    {userData === null || userData === undefined ? (
                        <h4>Carregando</h4>
                    ) : (
                        <>
                            <Row>
                                <Descritor>Nome:</Descritor> {userData?.name}
                            </Row>
                            <Row>
                                <Descritor>Email:</Descritor> {userData?.email}
                            </Row>
                            <Row>
                                <Descritor>Total:</Descritor>R$
                                {userData?.balance}
                            </Row>

                            <ButtonContainer>
                                <Link to={`/conta/${userData?.id}`}>
                                    Voltar para Conta
                                </Link>
                            </ButtonContainer>
                        </>
                    )}
                </UserInfoContainer>
            </Body>
        </>
    );
};
