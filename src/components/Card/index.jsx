import { StyledCard, TitleContainer, ImageContainer, UrlContainer } from "./style";

const Card = ({ title, image, url }) => {

    return (
        <StyledCard>
            <ImageContainer>
                <img src={image} alt="<imagem não encontrada>" width="100%"/>
            </ImageContainer>
            <TitleContainer>
                <h1>Titulo: {title}</h1>
            </TitleContainer>
            <UrlContainer>
                <a href={url} target="_blank" rel="noreferrer">Ver noticia completa</a>
            </UrlContainer>
        </StyledCard>
    );

};

export default Card;