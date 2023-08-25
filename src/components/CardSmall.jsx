import { styled } from "styled-components";
import { rem } from "../utils/helpers";
import { icons } from "../utils/cardIcons";

const StyledCardSmall = styled.div`
    text-transform: capitalize;
    font-weight: 700;
    user-select: none;

    padding: ${rem(26)};
    border-radius: ${rem(4)};
    width: 100%;

    background-color: var(--color-card-bg);

    &:hover {
        background-color: var(--color-card-bg-hover);
        cursor: pointer;
    }
`;

const CardRow = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: ${rem(40)};
    }
`;

const Amount = styled.span`
    color: var(--color-text-strong);
    font-size: ${rem(25)};
`;

const Percentage = styled.span`
    display: flex;
    align-items: center;
    gap: 0.3em;

    color: ${(prop) =>
        prop.$increase
            ? "var(--color-text-increase)"
            : "var(--color-text-decrease)"};
`;

function CardSmall({ platform, unit, amount, percentage }) {
    return (
        <StyledCardSmall>
            <CardRow>
                <span>{unit}</span>
                <img src={icons[platform]} alt={`${platform} icon`} />
            </CardRow>
            <CardRow>
                <Amount>{amount}</Amount>
                <Percentage $increase={+percentage > 0}>
                    <img
                        src={percentage > 0 ? icons.iconUp : icons.iconDown}
                        alt="increase"
                    />
                    {Math.abs(percentage)}%
                </Percentage>
            </CardRow>
        </StyledCardSmall>
    );
}

export default CardSmall;
