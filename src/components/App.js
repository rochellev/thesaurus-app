import "./App.css";
import HomeView from "./home/HomeView";
import VennDiagram from "./charts/VennDiagram";
const App = () => {
  return (
    <div className="App">
      <VennDiagram />
      {/* <HomeView /> */}
    </div>
  );
};

export default App;
