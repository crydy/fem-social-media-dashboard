import { styled } from "styled-components";
import { rem } from "../utils/helpers";

const StyledContainer = styled.div`
    max-width: 1116px;
    min-height: 100vh;
    margin: 0 auto;
    padding-left: ${rem(25)};
    padding-right: ${rem(25)};
`;

function Container({ children }) {
    return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
