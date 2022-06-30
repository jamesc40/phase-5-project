import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
