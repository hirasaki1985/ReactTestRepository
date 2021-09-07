import logo from "./logo.svg";
import "./App.css";
import Mermaid from "./components/atoms/mermaid/Mermaid";
import example from "./components/atoms/mermaid/MermaidExample";

function App() {
  return (
    <div className="App">
      <Mermaid chart={example} />
    </div>
  );
}

export default App;
