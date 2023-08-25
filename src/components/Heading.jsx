import { styled } from "styled-components";
import { device } from "../utils/breakpoints";

const StyledHeading = styled.h1`
    color: var(--color-text-strong);
    white-space: nowrap;
    text-transform: capitalize;
    font-size: 1.5rem;
    line-height: 1.6;

    @media ${device.sm} {
        font-size: 1.8rem;
    }
`;

function Heading({ children }) {
    return <StyledHeading>{children}</StyledHeading>;
}

export default Heading;
