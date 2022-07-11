import { useEffect, useReducer, useState } from "react";
import DateCard from "./DateCard";
import BeenToDateCard from "./BeenToDateCard";

export default function CouplePage({ couple, handleHasBeen }) {
  const [dates, dispatch] = useReducer(reducer, []);
  const [showDates, setShowDates] = useState([]);
  const [toggleShow, setToggle] = useState(false);
  const { name, completed_dates, image, leaderboard_position } = couple;

  const getDates = async () => {
    let req = await fetch("/date_nights");

    if (req.ok) {
      let res = await req.json();
      dispatch({ type: "load", payload: { dates: res } });
    }
  };

  useEffect(() => {
    getDates();
  }, []);

  useEffect(() => {
    const filteredDates = dates.filter((el) => el.has_been === toggleShow);
    if (toggleShow === false && filteredDates.length === 0) {
      handleSetToggle();
    }
    setShowDates([...filteredDates]);
  }, [dates, toggleShow]);

  const handleSetToggle = () => setToggle((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    let partnerMessage = document.querySelector("#partner-message");
    let form = new FormData(partnerMessage);
    console.log(form.get("message"));
    partnerMessage.reset();
  };

  return (
    <>
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Total Dates</p>
            <p className="title">{completed_dates}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <p className="title">{name}</p>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Position on Leaderboard</p>
            <p className="title">{leaderboard_position}</p>
          </div>
        </div>
      </nav>
      <div className="columns">
        <div className="mt-3">
          <img id="couple-page-image" src={image} />
          <div className="has-text-centered">
            <label className="checkbox mb-3">
              <input
                type="checkbox"
                checked={toggleShow}
                onChange={handleSetToggle}
              />
              Toggle Completed Dates
            </label>
          </div>
          <form id="partner-message" onSubmit={handleSubmit}>
            <div className="field">
              <label className="message">Couple Message</label>
              <div className="control">
                <input
                  className="input mb-2"
                  name="message"
                  type="text"
                  placeholder="..."
                />
                <button type="submit" className="button">
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="column is-1"></div>
        <div className="column is-6 ml-3">
          {/*<div className="columns">*/}
          {showDates.map((date) =>
            !toggleShow ? (
              <DateCard
                key={date.id}
                date={date}
                handleHasBeen={handleHasBeen}
                dispatch={dispatch}
              />
            ) : (
              <BeenToDateCard key={date.id} date={date} dispatch={dispatch} />
            )
          )}
          {/*</div>*/}
        </div>
      </div>
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "load":
      return action.payload.dates;
    case "review":
      return state.map((date) =>
        date.id === action.payload.id
          ? { ...date, review: action.payload.review }
          : date
      );
    case "update":
      return state.map((date) =>
        date.id === action.payload.id ? { ...date, has_been: true } : date
      );
    case "delete":
      return state.filter((date) => date.id !== action.payload.id);
    default:
      return;
  }
}
