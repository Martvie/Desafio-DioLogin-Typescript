import styled from "styled-components"

const CardContainer = styled.div`
    height: 10rem;
    width: 20rem;
    border-radius: 2rem;
    background-color: #fafafa;
    color: #000;

    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MainText = styled.h2`
    font-size: 1.4rem;

`

const Text = styled.p`
    margin: 0.5rem;
    font-size: 1.2rem;
`

interface ICardinfo {
    mainText: string;
    text: string;
}

export const CardInfo : React.FC<ICardinfo> = ({mainText, text}: ICardinfo) =>{
    return(
<CardContainer>

    <MainText>{mainText}</MainText>
    <Text>{text}</Text>
    
</CardContainer>
    )
}