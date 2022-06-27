import "./styles2.css";
import Navbar from "./Components2/Navbar2";
import SectionA from "./Components2/SectionA";
import CardDr from "./Components2/CardDr";
import CardJH from "./Components2/CardJH";
import CardDrJH from "./Components2/CardDrJH";
import CardDr2 from "./Components2/CardDr2";
import NewReleases from "./Components2/NewReleases";



export default function App() {
  return (
    <div className="App">
      <Navbar />
      <NewReleases/>
      <SectionA />
    <div className="SectionB">
      <CardDr/>
      <CardJH/>
      <CardDrJH/>
      <CardDr2/>
      <CardJH/>
      </div>

    </div>
  );
}
