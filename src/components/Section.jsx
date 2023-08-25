import { styled } from "styled-components";

import { rem } from "../utils/helpers";
import { device } from "../utils/breakpoints";
import { useColorTheme } from "../context/colorThemeContext";

import CardMain from "./CardMain";
import CardSmall from "./CardSmall";

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

function Section({ type, cardsData, title }) {
    const { isDarkMode } = useColorTheme();

    return (
        <>
            {title && <Title $isDarkMode={isDarkMode}>{title}</Title>}
            <StyledSection>
                {type === "main" &&
                    cardsData.map((entry) => (
                        <CardMain
                            key={entry.platform}
                            platform={entry.platform}
                            userName={entry.userName}
                            total={entry.total}
                            today={entry.today}
                        />
                    ))}
                {type === "daily" &&
                    cardsData.map((entry) => (
                        <CardSmall
                            key={entry.platform + entry.amount}
                            platform={entry.platform}
                            unit={entry.unit}
                            amount={entry.amount}
                            percentage={entry.percentage}
                        />
                    ))}
            </StyledSection>
        </>
    );
}

export default Section;
