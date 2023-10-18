import StyledHeader from "./style";

const Header = ({ children }) => {

    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    );

};

export default Header;