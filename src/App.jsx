import { Router, Route } from "@solidjs/router";

import Home from "./pages/home";
import Login from "./pages/login";
import Website from "./pages/website";

function App() {

  return (
    <div>
      <Router>
        <Route path="/home" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/" component={ Website } />
      </Router>
    </div>
  );
}

export default App;
