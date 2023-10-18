import styled from 'styled-components';

const StyledFooter = styled.footer`

    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #ffffff;
    color: #000000;

    border-top: 1px solid #205701;

    @media (max-width: 768px) {
            
        min-height: 100px;
    
    }

`;

export default StyledFooter;