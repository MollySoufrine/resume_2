import "./App.css";
import Container from "react-bootstrap/Container";
import Basics from "./components/Basics";
import Columns from "./components/Columns";

function App() {
  return (
    <div className="App">
      <Container className="resume-container">
        <Basics />
        <Columns />
      </Container>
    </div>
  );
}

export default App;
