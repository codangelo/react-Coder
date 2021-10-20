import NavBar from "./components/NavBar";
import ItemContainer from "./components/ItemContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBar />
      <ItemContainer mensaje = "Articulo 1"/>
      <ItemContainer mensaje = "Articulo 2"/>
      <ItemContainer mensaje = "Articulo 2"/>
    </div>
  );
}

export default App;
