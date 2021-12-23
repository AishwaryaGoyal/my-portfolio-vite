import "./App.css";
import styled, { css } from "styled-components";

function App() {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    ${(props) =>
      props.primary &&
      css`
        background: palevioletred;
        color: white;
      `};
  `;
  return (
    <header>
      <h1>Hello World!</h1>
      <Button>Normal Button </Button>
      <Button primary>Primary Button</Button>
    </header>
  );
}

export default App;
