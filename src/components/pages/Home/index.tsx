import styled from "styled-components";

import { Form } from "../../Form";
import { Header } from "../../Header";

export const LayoutWrapper = styled.div`
    min-height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <LayoutWrapper>
                <Form />
            </LayoutWrapper>
        </>
    );
};
