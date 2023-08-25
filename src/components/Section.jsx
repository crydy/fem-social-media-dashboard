import { styled } from "styled-components";

import { stats } from "../data/data";
import { rem } from "../utils/helpers";
import { device } from "../utils/breakpoints";
import { useColorTheme } from "../context/colorThemeContext";

import Card from "./Card";

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${rem(24)};
    margin-top: ${rem(40)};
    margin-bottom: ${rem(50)};

    @media ${device.sm} {
        margin-top: ${rem(50)};
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: ${rem(28)};
    }

    @media ${device.lg} {
        grid-template-columns: repeat(4, 1fr);
        gap: ${rem(30)};
    }
`;

const Title = styled.h2`
    color: ${(props) =>
        props.$isDarkMode
            ? "var(--color-text-strong)"
            : "var(--color-text-weak)"};
    text-transform: capitalize;
`;

function Section({ title }) {
    const { isDarkMode } = useColorTheme();

    return (
        <>
            {title && <Title $isDarkMode={isDarkMode}>{title}</Title>}
            <StyledSection>
                {stats.total.map((entry) => (
                    <Card
                        key={entry.social}
                        social={entry.social}
                        userName={entry.userName}
                        total={entry.total}
                        today={entry.today}
                    />
                ))}
            </StyledSection>
        </>
    );
}

export default Section;
