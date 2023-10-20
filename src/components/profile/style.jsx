import styled from 'styled-components';

const StyledCard = styled.div`

    width: 300px;
    height: 400px;

    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: #fff;
    border-radius: 5px;

    padding: 20px;

`;

const ProfileImage = styled.div`

    width: 100%;
    height: 300px;

    background-image: url(${props => props.image});

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    border-radius: 50%;
    border: 5px solid #205701;

`;

const TextContainer = styled.div`

    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const Name = styled.h1`

    font-size: 0.9;  
    font-weight: 500;
    color: #000;

    a {
        
        font-size: 1rem;
        text-decoration: none;
        color: #205701;

    }

`;

const Description = styled.p`

    font-size: 1rem;
    font-weight: 400;
    color: #205701;

    text-align: center;

`;

export { StyledCard, ProfileImage, TextContainer, Name, Description };