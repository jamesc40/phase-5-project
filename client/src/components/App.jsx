import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import ButtonAppBar from "./ButtonAppBar";
import Login from "./Login";
import Signup from "./Signup";
import CouplePage from "./CouplePage";
import EventPage from "./EventPage";

function App() {
  const [couple, setCouple] = useState({});
  const count = useRef(0);

  useEffect(() => {
    //if (Object.keys(couple).length !== 0) return;
    //console.log("running");
    count.current++;
    console.log(count.current);
    const getCouple = async () => {
      let req = await fetch("/validate-couple");

      if (req.ok) {
        let res = await req.json();
        setCouple(res);
      }
    };
    getCouple();
  }, []);

  const handleSetCouple = (fetchedCouple) => setCouple(fetchedCouple);
  const handleLogout = () => setCouple({});

  //console.log(couple);
  return (
    <BrowserRouter>
      <ButtonAppBar
        handleLogout={handleLogout}
        isLoggedin={Object.keys(couple).length !== 0}
      />
      <Container>
        <Switch>
          <Route exact path="/event-page">
            <EventPage />
          </Route>
          <Route exact path="/couple-page">
            <CouplePage couple={couple} />
          </Route>
          <Route exact path="/login">
            <Login handleSetCouple={handleSetCouple} />
          </Route>
          <Route exact path="/signup">
            <Signup handleSetCouple={handleSetCouple} />
          </Route>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
