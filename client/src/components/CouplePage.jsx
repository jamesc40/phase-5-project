import { useEffect, useReducer, useState } from "react";
import DateCard from "./DateCard";
import BeenToDateCard from "./BeenToDateCard";
import "./couple-page.css";

export default function CouplePage({ couple, coupleDispatch }) {
  const [dates, dispatch] = useReducer(reducer, []);
  const [showDates, setShowDates] = useState([]);
  const [toggleShow, setToggle] = useState(false);
  //const [messageModal, setModal] = useState(false);
  const { name, completed_dates, image, leaderboard_position, user_message } =
    couple;

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
    //if (user_message) setModal(true);
    const filteredDates = dates.filter((el) => el.has_been === toggleShow);
    if (toggleShow === false && filteredDates.length === 0) {
      handleSetToggle();
    }
    setShowDates([...filteredDates]);
  }, [dates, toggleShow]);

  const handleSetToggle = () => setToggle((prev) => !prev);

  const updateMessage = async (data) => {
    let options = {
      method: "PATCH",
      body: data,
    };

    let req = await fetch("/message", options);

    if (req.status === 204) {
      coupleDispatch({ type: "update message" });
    } else {
      console.log("great success");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let partnerMessage = document.querySelector("#partner-message");
    let form = new FormData(partnerMessage);

    if (form.get("message").length > 0) {
      updateMessage(form);
    } else {
      alert("Message must be at least one word");
    }

    partnerMessage.reset();
  };

  const handleMessage = () => updateMessage({ message: null });

  return (
    <>
      {/*<div className={messageModal ? "modal is-active" : "modal"}>*/}
      {/*<div className="modal-background"></div>*/}
      {/*<div className="modal-content">*/}
      {/*<div className="notification">{user_message}</div>*/}
      {/*</div>*/}
      {/*<button*/}
      {/*className="modal-close is-large"*/}
      {/*aria-label="close"*/}
      {/*onClick={handleModal}*/}
      {/*></button>*/}
      {/*</div>*/}

      <div className="columns is-vcentered">
        <div className="box mt-2">
          <div className="column">
            <figure>
              <img id="couple-page-image" src={image} />
            </figure>
          </div>
        </div>
        <div className="column">
          <div className="box">
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
            {user_message ? (
              <div className="notification">
                <button className="delete" onClick={handleMessage}></button>
                {user_message}
              </div>
            ) : null}
            <form id="partner-message" onSubmit={handleSubmit}>
              <div className="field">
                <label className="message">
                  Say something nice to your partner!
                </label>
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
            <div className="field has-text-centered">
              <input
                id="switch"
                className="switch is-outlined is-info"
                type="checkbox"
                checked={toggleShow}
                onChange={handleSetToggle}
              />
              <label htmlFor="switch">Toggle Completed Dates</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="columns is-multiline is-centered">
          {showDates.map((date) => (
            <div key={date.id} className="column is-4">
              {!toggleShow ? (
                <DateCard
                  date={date}
                  coupleDispatch={coupleDispatch}
                  dispatch={dispatch}
                />
              ) : (
                <BeenToDateCard date={date} dispatch={dispatch} />
              )}
            </div>
          ))}
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
