import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";

function App() {
  const greetingText = "¡Bienvenido a la tienda de Stiqi!";

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greetingText} />
    </>
  );
}

export default App;
