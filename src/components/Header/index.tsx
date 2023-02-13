import styled from "styled-components"

const HeaderContainer = styled.header`
    width: 100%;
    height: 3rem;

    display: flex;
    justify-content: center;

    font-size: 2rem;
`

export const Header = () =>{
    return(
        <HeaderContainer>
            Dio Bank
        </HeaderContainer>
    )
}