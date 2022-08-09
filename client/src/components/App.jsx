import { useEffect, useReducer, useState } from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import Signup from "./Signup";
import CouplePage from "./CouplePage";
import EventPage from "./EventPage";
import About from "./About";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const WEATHER_URL =
  "https://dark-sky.p.rapidapi.com/40.730610,-73.935242?exclude=minutely%2C%20flags&units=auto&lang=en";

function App() {
  const [couple, coupleDispatch] = useReducer(reducer, {});
  const [weather, setWeather] = useState({});

  useEffect(() => {
    let loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) return;

    const getCouple = async () => {
      let req = await fetch("/validate-couple");

      if (req.ok) {
        let res = await req.json();
        coupleDispatch({ type: "load", payload: { couple: res } });
      }
    };

    getCouple();
    //getWeather();
  }, []);

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
      console.log(res.currently);
      setWeather(res.currently);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar
        isLoggedin={Object.keys(couple).length !== 0}
        dispatch={coupleDispatch}
        weather={weather}
      />
      <div className="container">
        <Switch>
          <Route exact path="/event-page">
            <EventPage weather={weather} />
          </Route>
          <Route exact path="/couple-page">
            <CouplePage couple={couple} coupleDispatch={coupleDispatch} />
          </Route>
          <Route exact path="/leaderboard-page">
            <Leaderboard />
          </Route>
          <Route exact path="/login-page">
            <Login dispatch={coupleDispatch} />
          </Route>
          <Route exact path="/signup-page">
            <Signup dispatch={coupleDispatch} />
          </Route>
          <Route exact path="/about">
            <About
              isLoggedin={Object.keys(couple).length !== 0}
              dispatch={coupleDispatch}
            />
          </Route>
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

function reducer(state, action) {
  switch (action.type) {
    case "load":
      return action.payload.couple;
    case "logout":
      localStorage.clear();
      return {};
    case "has been":
      return {
        ...state,
        completed_dates: state.completed_dates++,
        leaderboard_position: action.payload.leaderboardPosition,
      };
    case "update message":
      return { ...state, user_message: null };
    default:
      return state;
  }
}
