import styled from "styled-components";

interface IInput {
    label: string;
    descritor?: string;
    value?: string;
    onChange?:any;
}

const InputContainer = styled.input`
    width: 100%;
    display: flex;
    align-items: center;

    font-size: 1.2rem;
    height: 1.8rem;

    border-radius: 0.5rem;
    border: none;
    width: 90%;
`;

export const Input: React.FC<IInput> = ({ label, descritor, value, onChange }: IInput) => {
    return <InputContainer id={label} type={label} placeholder={descritor} value={value} onChange={onChange}/>;
};
