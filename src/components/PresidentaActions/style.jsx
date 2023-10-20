import styled from 'styled-components';

const SectionTitleContainer = styled.div`

    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #205701;
`;

const BigCard = styled.div`

    width: 800px;
    height: 600px;

    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    border-radius: 5px;

    padding: 20px;

`;

const BigProfileImage = styled.div`

    width: 100%;
    height: 90%;

    background-image: url(${props => props.image});

    background-size: cover;

    border-radius: 10px;

`;

const TextContainer = styled.div`

    width: 100%;
    height: 10%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 20px;

`;

export { SectionTitleContainer, BigCard, BigProfileImage, TextContainer };