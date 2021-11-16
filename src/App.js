import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import CartContextProvider from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart'


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/producto/:productId" component={ItemDetailContainer} />
            <Route exact path="/categorias/:categId" component={ItemListContainer} />
            <Route exact path="/carrito" component={Cart} />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>

    </div>
  );
}

export default App;
