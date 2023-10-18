import { StyledNavbar, StyledLink, StyledTitle, LinkContainer, TitleContainer } from "./style";

const Navbar = ({ children }) => {

    return (
        <StyledNavbar>
            <TitleContainer>
                {children}
                <StyledTitle>
                    <StyledLink href="/">
                        NT News
                    </StyledLink>
                </StyledTitle>
            </TitleContainer>
            <LinkContainer>
                <StyledLink href="/">Home</StyledLink>
                <StyledLink href="/discentes">Discentes</StyledLink>
                <StyledLink href="/docentes">Docentes</StyledLink>
                <StyledLink href="/special">Special</StyledLink>
                <StyledLink href="/feedback">Feedback</StyledLink>
            </LinkContainer>
        </StyledNavbar>
    );

};

export default Navbar;