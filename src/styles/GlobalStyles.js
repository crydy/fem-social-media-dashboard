import { createGlobalStyle } from "styled-components";
import { rem } from "../utils/helpers";

const GlobalStyles = createGlobalStyle`

:root {
    --transition-time: 0.3s;

    --color-text-strong: hsl(230, 17%, 14%);
    --color-text-weak: hsl(228, 12%, 44%);
    --color-text-increase: hsl(163, 72%, 41%);
    --color-text-decrease: hsl(356, 69%, 56%);

    --color-header-separator: hsl(231, 9%, 58%);
    
    --color-bg: hsl(0, 0%, 100%);

    --color-theme-toggle: hsl(232, 22%, 74%);
    --color-theme-toggle-hover-1: hsl(210, 78%, 56%);
    --color-theme-toggle-hover-2: hsl(146, 68%, 55%);
    --color-theme-toggle-core: var(--color-bg);

    --color-card-bg: hsl(227, 47%, 96%);
    --color-card-bg-hover: hsl(232, 33%, 91%);
    --color-card-top-bg: hsl(225, 100%, 98%);

    --color-facebook: hsl(208, 92%, 53%);
    --color-twitter: hsl(203, 89%, 53%);
    --color-instagram-1: hsl(37, 97%, 70%);
    --color-instagram-2: hsl(329, 70%, 58%);
    --color-youtube: hsl(348, 97%, 39%);
}

&.dark-mode {
    --color-text-strong: hsl(0, 0%, 100%);
    --color-text-weak: hsl(228, 34%, 66%);

    --color-header-separator: hsl(235, 17%, 26%);
    
    --color-bg: hsl(230, 17%, 14%);
    
    --color-card-bg: hsl(228, 29%, 20%);
    --color-card-bg-hover: hsl(228, 25.5%, 27%);
    --color-card-top-bg: hsl(225, 100%, 98%);
}

*,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Transition for dark mode */
    transition: background-color var(--transition-time), border var(--transition-time);
}

body {
    font-family: "Inter", sans-serif;

    color: var(--color-text-weak);
    background-color: var(--color-bg);

    min-width: ${rem(375)};
    min-height: 100vh;
}

input,
button,
textarea,
select {
    font: inherit;
    color: inherit;
}

button {
    cursor: pointer;
}

img {
    max-width: 100%;
}
`;

export default GlobalStyles;
