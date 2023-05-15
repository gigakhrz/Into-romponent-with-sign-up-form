import { styled } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import bgMobile from "./assets/bg-intro-mobile.png";
import Description from "./Components/Description";
import Form from "./Components/Form";
import bgDesktop from "./assets/bg-intro-desktop.png";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Description />
      <Form />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  justify-content: center;
  padding: 88px 24px 64px;
  background: #ff7979;
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    background-image: url(${bgDesktop});
    gap: 45px;
  }
`;
