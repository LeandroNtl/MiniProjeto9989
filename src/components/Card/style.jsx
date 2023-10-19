import styled from 'styled-components';

const StyledCard = styled.div`

    width: 400px;
    height: 100%;

    background-color: #fff;

    border-radius: 10px;
    border: 1px solid #3da40188;

    color: #ffffff;
    background-color: #39880b;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;

    @media (max-width: 768px) {

        width: 200px;
        height: 100%;
    
    }

`;


const TitleContainer = styled.div`

    width: 100%;
    height: 25%;
    padding: 0 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    border-bottom: 1px solid #ffffff;


    h1 {
        font-size: 0.9rem;
    }

    @media (max-width: 768px) {
            
        h1 {
            font-size: 0.7rem;
        }
    
    }

`;

const ImageContainer = styled.div`

    width: 100%;
    height: 65%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #205701;

    border-radius: 10px 10px 0 0;

    img {
        width: 100%;
        height: 100%;

        border-radius: 10px 10px 0 0;
    }

`;

const UrlContainer = styled.div`

    width: 100%;
    height: 10%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 10px 10px;

    a {
        color: #ffffff;
        text-decoration: none;
        font-size: 0.8rem;
    }

    a:hover {
        color: #205701;
    }

    @media (max-width: 768px) {
            
        a {
            font-size: 0.6rem;
        }
    
    }

`;

export { StyledCard, TitleContainer, ImageContainer, UrlContainer };