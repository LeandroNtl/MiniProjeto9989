import styled from 'styled-components';
import Link from 'next/link';

const StyledNavbar = styled.nav`

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
            
        flex-direction: column;
        gap: 5px;

    }
`;

const StyledLink = styled(Link)`

    text-decoration: none;
    color: #205701;
    transition: color 0.3s ease;

    &:hover {
        color: #62fe08;
    }

    @media (max-width: 768px) {

        font-size: 0.9rem;

    }

`

const StyledTitle = styled.h1`

    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #205701;
    transition: color 0.3s ease;

    &:hover {
        color: #62fe08;
    }

    @media (max-width: 768px) {

        font-size: 1.2rem;

    }

`;

const LinkContainer = styled.div`

    width: 50%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;

    @media (max-width: 768px) {

        border-top: 1px solid #d8e4d2;
        width: 50%;
        padding-top: 5px;
        justify-content: center;
        margin: 0;

    }

`;

const TitleContainer = styled.div`

    width: 50%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1rem;

    @media (max-width: 768px) {
            
        width: 100%;
        justify-content: center;

    }

`;

export { StyledNavbar, StyledLink, StyledTitle, LinkContainer, TitleContainer };