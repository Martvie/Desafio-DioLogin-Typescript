import styled from "styled-components";
import{ MouseEventHandler} from "react";

interface IButton {
    name : string,
    event?: MouseEventHandler,
}


const ButtonContainer = styled.button`
    width: 8rem;
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
        <ButtonContainer onClick={event} >
            {name}
        </ButtonContainer>
    )
}

Button.defaultProps = {
    name: "Botão"
}

