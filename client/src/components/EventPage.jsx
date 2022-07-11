import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import TinderCard from "react-tinder-card";
import Review from "./Review";

export default function EventPage() {
  const [events, setEvents] = useState([]);
  const [toggleReviews, setToggle] = useState(false);

  const getEvents = async () => {
    let req = await fetch("/events");
    if (req.status !== 204) {
      let res = await req.json();
      setEvents(res);
    } else {
      setEvents([]);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const handleNewDateNight = async (bool, id, i) => {
    let req = await fetch("/date_nights", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ event_id: id, is_interested: bool }),
    });

    if (req.status === 201) {
      let res = await req.json();
      console.log(res);

      setEvents(events.slice(i + 1));
    }
  };

  const handleSwipe = (direction, id, i) => {
    switch (direction) {
      case "right":
        console.log("right");
        handleNewDateNight(true, id, i);
        break;
      case "left":
        console.log("left");
        handleNewDateNight(false, id, i);
        break;
      default:
        break;
    }
  };

  const handleReviewToggle = () => setToggle((prev) => !prev);

  if (!events || events.length === 0)
    return <p>come back later for more dates cuh</p>;

  return (
    <>
      {events && events.length > 0 ? (
        <>
          <div id="event-root">
            <div>
              <div className="eventCardContainer">
                {events.map((event, i) => {
                  return (
                    <TinderCard
                      key={event.id}
                      onSwipe={(dir) => handleSwipe(dir, event.id, i)}
                      preventSwipe={["up", "down"]}
                    >
                      <EventCard event={event} />
                    </TinderCard>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="has-text-centered my-2">
            <button className="button is-text" onClick={handleReviewToggle}>
              {toggleReviews ? "Hide Reviews" : "See Reviews"}
            </button>
          </div>
          {toggleReviews
            ? events[0].reviews.map((review) => (
                <Review key={review.id} review={review} />
              ))
            : null}
        </>
      ) : null}
    </>
  );
}
