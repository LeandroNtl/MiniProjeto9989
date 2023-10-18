import styled from 'styled-components';

const StyledHeader = styled.header`

    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: #ffffff;
    color: #000000;

    border-bottom: 1px solid #205701;

    @media (max-width: 768px) {

        height: 80px;
    
    }

`;

export default StyledHeader;