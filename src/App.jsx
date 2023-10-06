import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  const greetingText = "¡Stiqi 3D Store!";

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greetingText} />
    </>
  );
}

export default App;
