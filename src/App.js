import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
          <ItemListContainer />
          </Route>
          <Route exact path="producto/:productId" component={ItemDetailContainer}/>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
