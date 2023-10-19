import { StyledCard, ProfileImage, TextContainer, Name, Description } from "./style";

const ProfileCard = ({ name, image, url, description }) => {

    return (
        <StyledCard>
            <ProfileImage image={image} />
            <TextContainer>
                <Name>
                    <a href={url} target="_blank" rel="noreferrer">{name}</a>
                </Name>
                <Description>{description}</Description>
            </TextContainer>
        </StyledCard>
    );

};

export default ProfileCard;