import { styled } from "styled-components";

import { decorateNumber, rem } from "../utils/helpers";
import { device } from "../utils/breakpoints";
import { stats } from "../data/data";

import Heading from "./Heading";
import ThemeSwitcher from "./ThemeSwitcher";

const StyledHeader = styled.header`
    margin: ${rem(40)} 0;

    @media ${device.sm} {
        display: flex;
        justify-content: space-between;
    }
`;

const StyledTotal = styled.h2`
    color: var(--color-text-weak);
    font-size: ${rem(16)};
`;

function Header() {
    return (
        <StyledHeader>
            <div>
                <Heading>Social media dashboard</Heading>
                <StyledTotal as="h2">
                    Total followers: {decorateNumber(stats.totalAmount)}
                </StyledTotal>
            </div>

            <ThemeSwitcher />
        </StyledHeader>
    );
}

export default Header;
