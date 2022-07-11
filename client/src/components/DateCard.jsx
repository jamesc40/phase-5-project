import { useState } from "react";

export default function DateCard({ date, dispatch, handleHasBeen }) {
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
    handleHasBeen(leaderboardPosition);
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
      {toggleDescription ? (
        <div className="card-content">
          <div className="content">{description}</div>
        </div>
      ) : null}
      <div className="card-footer">
        <a className="card-footer-item" onClick={handleToggle}>
          Learn More!
        </a>
        <a className="card-footer-item" onClick={handleHasBeenClick}>
          We've been!
        </a>
        <a className="card-footer-item" onClick={handleDelete}>
          We're no longer interested
        </a>
      </div>
    </div>
  );
}
