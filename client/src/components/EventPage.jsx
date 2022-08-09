import { useEffect, useState } from "react";
import BasicEventCard from "./BasicEventCard";
import EventCard from "./EventCard";
import Review from "./Review";
import "./event-page.css";

export default function EventPage({ weather }) {
  const [events, setEvents] = useState([]);
  const [activeEvent, setActive] = useState({});

  const getEvents = async () => {
    let req = await fetch("/events");
    if (req.status !== 204) {
      let res = await req.json();
      setEvents(res);
    } else {
      setEvents([]);
    }
  };

  const handleSetActive = () => {
    let index = Math.floor(Math.random() * events.length);
    let randomEvent = events[index];
    setActive(randomEvent);
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    handleSetActive();
  }, [events]);

  const handleNewDateNight = async (bool) => {
    let req = await fetch("/date_nights", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ event_id: activeEvent.id, is_interested: bool }),
    });

    if (req.status === 201) {
      setEvents(events.filter((event) => event.id !== activeEvent.id));
    }
  };

  const handleLike = (event) => {
    switch (event.target.name) {
      case "like":
        handleNewDateNight(true);
        return;
      case "disslike":
        handleNewDateNight(false);
        return;
      default:
        return;
    }
  };

  //const handleReviewToggle = () => setToggle((prev) => !prev);

  const { summary, temperature } = weather;
  console.log(weather);

  return (
    <>
      {activeEvent && Object.keys(activeEvent).length > 0 ? (
        <>
          <section className="hero">
            <div className="hero-body">
              {Object.keys(weather).length > 0 ? (
                <p className="title">
                  Todays Forcast is {summary} and {Math.ceil(temperature)}ºF
                </p>
              ) : (
                <p className="title">Todays Forcast is sunny and 68 ºF</p>
              )}
              <p className="subtitle">{activeEvent.intro}</p>
            </div>
          </section>
          <BasicEventCard event={activeEvent} handleLike={handleLike} />
        </>
      ) : (
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div>
              <p className="title">That's all from us</p>
              <p className="subtitle">Time to get out there!</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
