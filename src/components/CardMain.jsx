import { styled } from "styled-components";

import { icons } from "../utils/cardIcons";
import { rem, shortNumber } from "../utils/helpers";

const StyledCard = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${rem(30)};

    width: 100%;
    padding: ${rem(30)};
    border-radius: ${rem(4)};

    overflow: hidden;
    user-select: none;

    background-color: var(--color-card-bg);

    &:hover {
        background-color: var(--color-card-bg-hover);
        cursor: pointer;
    }

    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: ${rem(4)};

        background: ${(props) => {
            switch (props.$platform) {
                case "facebook":
                    return "var(--color-facebook)";
                case "twitter":
                    return "var(--color-twitter)";
                case "instagram":
                    return "linear-gradient(90deg, var(--color-instagram-1), var(--color-instagram-2))";
                case "youtube":
                    return "var(--color-youtube)";
                default:
                    return "pink";
            }
        }};
    }
`;

const StyledHeader = styled.h2`
    display: flex;
    align-items: center;
    gap: 0.6em;
    font-size: ${rem(12)};

    & img {
        height: ${rem(20)};
    }
`;

const StyledTotal = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;

    & span:first-child {
        color: var(--color-text-strong);
        font-size: ${rem(60)};
        line-height: 1;
        font-weight: 700;
    }

    & span:last-child {
        letter-spacing: 0.3em;
        text-transform: uppercase;
    }
`;

const StyledToday = styled.p`
    display: flex;
    align-items: center;
    gap: 0.4em;
    text-transform: capitalize;
    font-weight: 700;

    color: ${(prop) =>
        prop.$increase
            ? "var(--color-text-increase)"
            : "var(--color-text-decrease)"};
`;

function CardMain({ platform, userName, total, today }) {
    return (
        <StyledCard $platform={platform}>
            <StyledHeader>
                <img src={icons[platform]} alt={`${platform} icon`} />
                <span>{userName}</span>
            </StyledHeader>
            <StyledTotal>
                <span>{total < 10000 ? total : shortNumber(total)}</span>
                <span>followers</span>
            </StyledTotal>
            <StyledToday $increase={today > 0}>
                <img
                    src={today > 0 ? icons.iconUp : icons.iconDown}
                    alt="increase"
                />
                <span>{today > 0 ? today : Math.abs(today)} today</span>
            </StyledToday>
        </StyledCard>
    );
}

export default CardMain;
