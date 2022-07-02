import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import CouplePage from "./CouplePage";
import EventPage from "./EventPage";

function App() {
  const [couple, setCouple] = useState({});
  const count = useRef(0);

  useEffect(() => {
    count.current++;
    //console.log(count.current);
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

  return (
    <BrowserRouter>
      <Navbar
        image={couple.image ? couple.image : null}
        isLoggedin={Object.keys(couple).length !== 0}
        handleLogout={handleLogout}
      />
      <div className="container">
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
            <h1 className="title">Hello World</h1>
            <p className="subtitle">
              My first website with <strong>Bulma</strong>!
            </p>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
