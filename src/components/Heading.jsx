import { styled } from "styled-components";

const StyledHeading = styled.h1`
    color: var(--color-text-strong);
    white-space: nowrap;
    text-transform: capitalize;
    font-size: 1.5rem;
    line-height: 1.6;
`;

function Heading({ children }) {
    return <StyledHeading>{children}</StyledHeading>;
}

export default Heading;
