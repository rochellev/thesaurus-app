import "./App.css";
import HomeView from "./home/HomeView";
import VennDiagram from "./charts/VennDiagram";
import ForcedDirectedTree from './charts/ForceDirectedTree';
const App = () => {
  return (
    <div className="App">
   <ForcedDirectedTree />
    </div>
  );
};

export default App;
