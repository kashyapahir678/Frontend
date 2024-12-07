import "./App.css";
import BasicExample from "./components/Navbar";
import Cards from './components/Cards'
import IntroDivider from "./components/Mui";

function App() {
  return (
    <>
    <div className="App">
      <IntroDivider/>
      <BasicExample/>

      <Cards image="https://thumbs.dreamstime.com/b/tranquil-peaceful-lake-jetty-new-zealand-45322811.jpg"/>
      <Cards image="https://www.shutterstock.com/image-photo/town-docks-center-harbor-nh-260nw-2326863955.jpg"/>
      <Cards image="https://www.shutterstock.com/image-photo/beautiful-sunset-reflection-st-louis-260nw-1160678617.jpg"/>
      <Cards image="https://www.shutterstock.com/image-photo/old-wooden-pier-sunset-long-260nw-1818675761.jpg"/>
    </div>
    </>
  );
}

export default App;
