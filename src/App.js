import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Employees from "./pages/Employees";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Employees} path="/employees" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
