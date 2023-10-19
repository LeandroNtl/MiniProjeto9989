import styled from 'styled-components';

const StyledCard = styled.div`

    width: 400px;
    height: 100%;

    background-color: #fff;

    border-radius: 10px;
    border: 1px solid #205701;

    color: #ffffff;
    background-color: #307d04;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;

`;


const TitleContainer = styled.div`

    width: 100%;
    height: 30%;
    padding: 0 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    border-bottom: 1px solid #205701;

    h1 {
        font-size: 0.9rem;
    }

`;

const ImageContainer = styled.div`

    width: 100%;
    height: 60%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #205701;

    img {
        width: 100%;
        height: 100%;
    }

`;

const UrlContainer = styled.div`

    width: 100%;
    height: 10%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        color: #ffffff;
        text-decoration: none;
        font-size: 0.8rem;
    }

    a:hover {
        color: #205701;
    }

`;

export { StyledCard, TitleContainer, ImageContainer, UrlContainer };