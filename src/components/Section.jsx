import { styled } from "styled-components";

import { stats } from "../data/data";
import { rem } from "../utils/helpers";
import { device } from "../utils/breakpoints";

import Card from "./Card";

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${rem(24)};

    @media ${device.sm} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: ${rem(28)};
    }

    @media ${device.lg} {
        grid-template-columns: repeat(4, 1fr);
        gap: ${rem(30)};
    }
`;

function Section() {
    return (
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
    );
}

export default Section;
