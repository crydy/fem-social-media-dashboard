import GlobalStyles from "./styles/GlobalStyles";

import { stats } from "./data/data";
import { ColorThemeProvider } from "./context/colorThemeContext";

import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
    return (
        <>
            <GlobalStyles />
            <ColorThemeProvider>
                <Container>
                    <Header />
                    <Section type="main" cardsData={stats.total} />
                    <Section
                        type="daily"
                        title="overview - today"
                        cardsData={stats.today}
                    />
                </Container>
            </ColorThemeProvider>
        </>
    );
}

export default App;
