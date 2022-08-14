import "./App.css";
import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    blue: "#2979ff",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      {/* <CardList>
        <Card2></Card2>
      </CardList> */}
      <div className="text-3xl font-bold underline text-center">Le Duc Huy</div>
    </ThemeProvider>
  );
}

export default App;
