import styled from "styled-components";

interface IButton {
    name? : string,
    event: any
}


const ButtonContainer = styled.button`
    width: 90%;
    height: 2rem;

    border-radius: 0.5rem;
    border: none;
    font-size: 1.8rem;

    background-color: #e2c2ff ;
    color: #040404;

    &:hover{
        cursor: pointer;
        background-color: #c9b3dd ;
    color: #000000;
    }
`

export const Button : React.FC<IButton> = ({name, event}: IButton) =>{
    return(
        <ButtonContainer onClick={event}>
            {name}
        </ButtonContainer>
    )
}

Button.defaultProps = {
    name: "Botão"
}

