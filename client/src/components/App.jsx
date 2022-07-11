import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import Signup from "./Signup";
import CouplePage from "./CouplePage";
import EventPage from "./EventPage";
import Footer from "./Footer";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const WEATHER_URL =
  "https://dark-sky.p.rapidapi.com/40.730610,-73.935242?exclude=minutely%2C%20flags&units=auto&lang=en";

function App() {
  const [couple, setCouple] = useState({});
  const [weather, setWeather] = useState({});

  useEffect(() => {
    let loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) return;

    const getCouple = async () => {
      let req = await fetch("/validate-couple");

      if (req.ok) {
        let res = await req.json();
        setCouple(res);
      }
    };

    getCouple();
    //getWeather();
  }, []);

  const handleSetCouple = (fetchedCouple) => setCouple(fetchedCouple);

  const handleLogout = () => {
    localStorage.clear();
    setCouple({});
  };

  const handleHasBeen = (leaderboardPosition) => {
    couple.completed_dates++;

    setCouple({
      ...couple,
      leaderboard_position: leaderboardPosition,
    });
  };

  const getWeather = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
      },
    };

    let req = await fetch(WEATHER_URL, options);
    let res = await req.json();

    try {
      setWeather(res.currently);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        isLoggedin={Object.keys(couple).length !== 0}
        handleLogout={handleLogout}
        weather={weather}
      />
      <div className="container">
        <Switch>
          <Route exact path="/event-page">
            <EventPage />
          </Route>
          <Route exact path="/couple-page">
            <CouplePage couple={couple} handleHasBeen={handleHasBeen} />
          </Route>
          <Route exact path="/leaderboard-page">
            <Leaderboard />
          </Route>
          <Route exact path="/login-page">
            <Login handleSetCouple={handleSetCouple} />
          </Route>
          <Route exact path="/signup-page">
            <Signup handleSetCouple={handleSetCouple} />
          </Route>
          <Route exact path="/">
            <h1 className="title">Hello World</h1>
            <p className="subtitle">
              My first website with <strong>Bulma</strong>!
            </p>
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
