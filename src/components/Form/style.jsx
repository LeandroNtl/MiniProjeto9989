import styled from 'styled-components';

const StyledForm = styled.form`

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px;
    border-radius: 10px;
    border: 1px solid #205701;

    gap: 10px;

    color: #205701;

`;

const FormField = styled.div`

    width: 50%;
    height: ${props => props.height || '60px'};
    padding: 0 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

`;

const FormLabel = styled.label` 

    font-size: 1.2rem;
    font-weight: 500;
    color: #205701;

`;

const FormInput = styled.input`

    width: 100%;
    height: 100%;
    padding: 10px;

    border-radius: 5px;
    border: 1px solid #205701;

    font-size: 1rem;
    font-weight: 400;
    color: #205701;
    
    outline: none;

    ::placeholder {
        color: #205701;
    }

`;

const FormButton = styled.button`

    width: 100px;
    height: 50px;
    padding: 10px;

    border-radius: 5px;
    border: 1px solid #205701;

    font-size: 1rem;
    font-weight: 500;
    color: #205701;

    background-color: transparent;

    cursor: pointer;

    transition: all 0.2s ease-in-out;

    :hover {
        background-color: #205701;
        color: white;
    }

`;

export { StyledForm, FormField, FormLabel, FormInput, FormButton };