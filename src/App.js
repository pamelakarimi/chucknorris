
import './App.css';
import Categories from './Views/categories';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import CategoryItem from './Views/category_item';

function App() {
  return (
    <div className="chucknorris-app">
      <Router>
        
        
        <Switch>
          <Route exact path="/">
            <Categories />
          </Route>
          <Route exact path="/chucknorris">
            <Categories />
          </Route>
        <Route path="/joke/:category">
           <CategoryItem />
          </Route>
        </Switch>
      </Router>

  

    </div>
  );
}

export default App;
