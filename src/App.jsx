import GlobalStyles from "./styles/GlobalStyles";

import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";
import { ColorThemeProvider } from "./context/colorThemeContext";

function App() {
    return (
        <>
            <GlobalStyles />
            <ColorThemeProvider>
                <Container>
                    <Header />
                    <Section />
                </Container>
            </ColorThemeProvider>
        </>
    );
}

export default App;
