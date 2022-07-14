import { useState } from "react";

export default function DateCard({ date, dispatch, coupleDispatch }) {
  const [toggleDescription, setToggle] = useState(false);
  const { id } = date;
  const URL = `/date_nights/${id}`;
  const { description, name, image, website } = date.event;

  const handleHasBeenClick = async () => {
    let req = await fetch(URL, {
      method: "PATCH",
    });

    if (!req.ok) {
      let { error } = await req.json();
      console.error(error);
      return;
    }

    let leaderboardPosition = await req.json();

    coupleDispatch({
      type: "has been",
      payload: { leaderboardPosition: leaderboardPosition },
    });

    dispatch({ type: "update", payload: { id: id } });
  };

  const handleDelete = async () => {
    let req = await fetch(URL, {
      method: "DELETE",
    });

    if (!req.ok) {
      let { error } = await req.json();
      console.error(error);
      return;
    }

    dispatch({ type: "delete", payload: { id: id } });
  };

  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <div className="card mb-3">
      <div className="card-header">
        <p className="card-header-title">{name}</p>
      </div>
      {!toggleDescription ? (
        <div className="card-image event-image">
          <figure className="image">
            <img src={image} />
          </figure>
        </div>
      ) : (
        <div className="card-content event-description">
          <div className="content">{description}</div>
        </div>
      )}
      <div className="card-footer">
        <a className="card-footer-item" onClick={handleToggle}>
          Learn More!
        </a>
        <a className="card-footer-item" onClick={handleHasBeenClick}>
          We've been!
        </a>
        <a className="card-footer-item" onClick={handleDelete}>
          Nevermind!
        </a>
      </div>
    </div>
  );
}
