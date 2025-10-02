import { Route, Switch } from "wouter";
import styled from "styled-components";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { PortfolioDetail } from "./components/PortfolioDetail";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

const AppContainer = styled.div`
  min-height: 100vh;
`;

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContainer>
          <Navigation />
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/portfolio/:id" component={PortfolioDetail} />
          </Switch>
        </AppContainer>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
