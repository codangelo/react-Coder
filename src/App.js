import NavBar from "./components/NavBar";
import ItemContainer from "./components/ItemListContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBar />
      <ItemContainer mensaje = "Articulo 1"/>
    </div>
  );
}

export default App;
