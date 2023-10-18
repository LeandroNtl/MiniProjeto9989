import styled from 'styled-components';

const StyledContainer = styled.div`

    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};

    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};

    background-color: ${props => props.bg || 'transparent'};
    color: ${props => props.color || 'black'};

    border: ${props => props.border || 'none'};
    border-radius: ${props => props.radius || '0px'};
    box-shadow: ${props => props.shadow || 'none'};

    margin: ${props => props.margin || '0px'};
    padding: ${props => props.padding || '0px'};
    gap: ${props => props.gap || '0px'};

    @media (max-width: 768px) {

        width: ${props => props.mobile_width || props.width || '100%'};
        height: ${props => props.mobile_height || props.height || '100%'};

        display: ${props => props.mobile_display || props.display || 'flex'};
        flex-direction: ${props => props.mobile_direction || props.direction || 'row'};
        justify-content: ${props => props.mobile_justify || props.justify || 'center'};
        align-items: ${props => props.mobile_align || props.align || 'center'};

        background-color: ${props => props.mobile_bg || props.bg || 'transparent'};
        color: ${props => props.mobile_color || props.color || 'black'};

        border: ${props => props.mobile_border || props.border || 'none'};
        border-radius: ${props => props.mobile_radius || props.radius || '0px'};
        box-shadow: ${props => props.mobile_shadow || props.shadow || 'none'};

        margin: ${props => props.mobile_margin || props.margin || '0px'};
        padding: ${props => props.mobile_padding || props.padding || '0px'};

    }

`;

export default StyledContainer;

