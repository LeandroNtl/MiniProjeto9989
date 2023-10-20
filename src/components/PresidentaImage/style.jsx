import styled from 'styled-components';

const StyledCard = styled.div`

    width: 350px;
    height: 350px;

    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: #fff;
    border-radius: 50%;

`;

const ProfileImage = styled.div`

    width: 100%;
    height: 100%;

    background-image: url(${props => props.image});

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    border-radius: 50%;
    border: 5px solid #205701;

`;

export { StyledCard, ProfileImage };