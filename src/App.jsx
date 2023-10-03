import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  const greetingText = "¡Bienvenidx a la tienda de Stiqi!";

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greetingText} />
    </>
  );
}

export default App;
