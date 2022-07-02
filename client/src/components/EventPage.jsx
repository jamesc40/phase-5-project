import { useEffect, useState } from "react";
//import { useHistory } from "react-router-dom";

export default function EventPage() {
  const [event, setEvent] = useState({});
  //const history = useHistory();

  useEffect(() => {
    const getEvent = async () => {
      let req = await fetch("/event");
      if (req.ok) {
        setEvent(await req.json());
      } else {
        console.error(await req.json());
      }
    };
    getEvent();
  }, []);

  const { name, event_type, description, image, website } = event;

  const handleLike = async () => {
    let req = await fetch("/date_nights", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ event_id: event.id }),
    });

    if (req.ok) {
      console.log(await req.json());
      window.location.assign(website);
    }
  };

  return (
    <>
      <div className="has-text-centered mt-2">
        <img id="event-page-image" src={image} />{" "}
      </div>
      <div className="has-text-centered">
        <h1 className="title is-2">{name}</h1>
        <h2 className="subtitle is-3">{event_type}</h2>
        <h5 className="subtitle is-5">{description}</h5>
        <a className="is-size-6" href={website}>
          Learn more here!
        </a>
      </div>
      <div className="has-text-centered my-5">
        <button className="button is-link is-light mx-2" onClick={handleLike}>
          Like
        </button>
        <button className="button is-danger is-light">Not Interested</button>
      </div>
    </>
  );
}
