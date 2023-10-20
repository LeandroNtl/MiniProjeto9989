import { BigCard, BigProfileImage, TextContainer } from "./style";


const PresidentaActions = ({ image, text }) => {

    return (

        <BigCard>
                
            <BigProfileImage image={image} />
            <TextContainer>
                {text}
            </TextContainer>

        </BigCard>

    );

};

export default PresidentaActions;