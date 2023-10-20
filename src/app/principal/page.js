"use client";
import Container from "@/components/Container";
import Page from "../page";
import PresidentaImage from "@/components/PresidentaImage";
import { SectionTitleContainer } from "@/components/PresidentaActions/style";
import PresidentaActions from "@/components/PresidentaActions";

const Principal = () => {

    const images = [
      "/images/1.jpeg",
      "/images/3.jpeg",
      "/images/4.jpeg",
      "/images/2.jpeg",
    ]

    const texts = [
      "Resolveu o problema do refetório",
      "Renomeou uma rua para representar seu Estado",
      "Auxiliou em aulas",
      "Participou de reuniões importantes para solucionar o problema da internet",
    ]

    return (
  
      <Page>
        <Container>
            <Container width="40%" height="90%" padding="10px" direction="column" gap="10px">
              <PresidentaImage image={"/images/principal.jpeg"} />
              <h3>Sabrina Victoria C. Castelo</h3>
            </Container>
            <Container width="60%" height="90%" direction="column">
              <SectionTitleContainer>
                <h1>Feitos da Representante</h1>
              </SectionTitleContainer>
              <Container overflow_x="auto" justify="flex-start" mobile_padding="0px">
                {images.map((image, index) => (
                  <PresidentaActions image={image} text={texts[index]} />
                ))}
              </Container>
            </Container>
        </Container>
      </Page>
  
    );
  
};

export default Principal;