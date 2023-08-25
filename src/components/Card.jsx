import { styled } from "styled-components";

import { device } from "../utils/breakpoints";
import { rem, shortNumber } from "../utils/helpers";

import iconFacebook from "../assets/icon-facebook.svg";
import iconInstagram from "../assets/icon-instagram.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconYoutube from "../assets/icon-youtube.svg";
import iconUp from "../assets/icon-up.svg";
import iconDown from "../assets/icon-down.svg";

const icons = {
    facebook: iconFacebook,
    instagram: iconInstagram,
    twitter: iconTwitter,
    youtube: iconYoutube,
};

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

    @media ${device.sm} {
        /* background-color: red; */
        /* width: 50%; */
    }

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
            switch (props.$social) {
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

function Card({ social, userName, total, today }) {
    return (
        <StyledCard $social={social}>
            <StyledHeader>
                <img src={icons[social]} alt={`${social} icon`} />
                <span>{userName}</span>
            </StyledHeader>
            <StyledTotal>
                <span>{total < 10000 ? total : shortNumber(total)}</span>
                <span>followers</span>
            </StyledTotal>
            <StyledToday $increase={today > 0}>
                <img src={today > 0 ? iconUp : iconDown} alt="increase" />
                <span>{today > 0 ? today : Math.abs(today)} today</span>
            </StyledToday>
        </StyledCard>
    );
}

export default Card;
