import { Header } from "../Header";

import styled from "styled-components";
import { Form } from "../Form";

export const LayoutWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const Layout = () => {
    return (
        <>
        <Header />
        <LayoutWrapper>
            
            <Form/>
        </LayoutWrapper>
        </>
    );
};
