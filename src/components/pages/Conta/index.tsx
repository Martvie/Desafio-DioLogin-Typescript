import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate, Link } from "react-router-dom";


import { CardInfo } from "../../CardInfo";

import { api } from "../../../services/api";

import { Header } from "../../Header";
import { AppContext } from "../../../contexts/AppContext";


const InfoWrapper = styled.div`
    margin-top: 2rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    height: 50vh;
`;

interface IUserData {
    name: string,
    email: string,
    password: string,
    balance: number,
    id: string
}

export const Conta: React.FC = () => {

    const [userData, setUserData] = useState<null| IUserData>()
    const {id} = useParams();
    const {isLogged} = useContext(AppContext);
    const actualData = new Date();
    const navigate = useNavigate();

    !isLogged && navigate('/');

    useEffect(() => {
        const getData = async () => {
            const data: any | IUserData = await api;
            setUserData(data)
        };

        getData();
    });


    if(userData && id !== userData.id){
        navigate('/')
    }

    return (
        <>
            <Header />
            <InfoWrapper>
        {userData === null || userData === undefined ? <h1>Carregando!</h1>:
        <>
        <Link to={`/user/${userData?.id}`} >
        <CardInfo 
        mainText={`Bem vindo ${userData?.name}!`}
        text={`${actualData.getDay()}/${actualData.getMonth()}//${actualData.getFullYear()}  ${actualData.getHours()}:${actualData.getMinutes()}`}
        />
        </Link>
        <CardInfo mainText="Saldo" text={`R$ ${userData.balance}`}/>
        </>
        }    
            </InfoWrapper>
        </>
    );
};
