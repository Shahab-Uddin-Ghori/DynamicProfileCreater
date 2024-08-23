import "./App.css";
import Card from "./components/Card/Card.jsx";
import H1 from "./components/Headings/H1.jsx";

function App() {
  return (
    <div className="main">
      <H1 text="Dynamic profile Card Creating App" />
      <div className="cardContainer">
        <Card />
      </div>
    </div>
  );
}

export default App;
