import { styled } from "styled-components";
import { rem } from "../utils/helpers";
import { useColorTheme } from "../context/colorThemeContext";
import { device } from "../utils/breakpoints";

const buttonCoreSize = 18;
const buttonIndent = 3;
const marginTop = 40;

const StyledThemeSwitcher = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: ${rem(marginTop)};
    position: relative;

    &::before {
        position: absolute;
        content: "";
        top: ${rem(marginTop * 0.5)};
        left: 0;
        width: 100%;
        height: ${rem(1)};
        background-color: var(--color-header-separator);
    }

    @media ${device.sm} {
        justify-content: center;
        gap: ${rem(14)};
        padding-top: 0;

        &::before {
            display: none;
        }
    }
`;

const ThemeSwitcherButton = styled.button`
    position: relative;
    background: var(--color-theme-toggle);

    width: ${rem((buttonCoreSize + buttonIndent) * 2)};
    height: ${rem(buttonCoreSize + buttonIndent * 2)};

    border: none;
    border-radius: ${rem((buttonCoreSize + buttonIndent * 2) / 2)};

    background: linear-gradient(
        90deg,
        var(--color-theme-toggle-hover-1),
        var(--color-theme-toggle-hover-2)
    );
    filter: grayscale(100%) opacity(50%);

    transition: filter var(--transition-time);

    .dark-mode &,
    &:hover {
        filter: none;
    }

    /* button core */
    &::before {
        position: absolute;
        content: "";

        width: ${rem(buttonCoreSize)};
        height: ${rem(buttonCoreSize)};
        top: ${rem(buttonIndent)};
        left: ${(props) =>
            props.$isDarkMode
                ? rem(buttonIndent)
                : rem(buttonIndent + buttonCoreSize)};

        border-radius: ${rem(buttonCoreSize / 2)};

        background-color: var(--color-theme-toggle-core);
        transition: left var(--transition-time),
            background-color var(--transition-time);
    }
`;

const Label = styled.label`
    user-select: none;
`;

function ThemeSwitcher() {
    const { isDarkMode, toggleDarkMode } = useColorTheme();

    return (
        <StyledThemeSwitcher>
            <Label>Dark mode</Label>
            <ThemeSwitcherButton
                type="button"
                onClick={toggleDarkMode}
                $isDarkMode={isDarkMode}
            />
        </StyledThemeSwitcher>
    );
}

export default ThemeSwitcher;
