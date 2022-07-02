import { useEffect, useState } from "react";
export default function CouplePage({ couple }) {
  const [showDates, setShowDates] = useState([]);
  const [toggleShow, setToggle] = useState(false);
  const { name, completed_dates, date_nights, image } = couple;

  useEffect(() => {
    if (!date_nights) return;
    setShowDates(date_nights.filter((el) => el.has_been === toggleShow));
  }, [date_nights, toggleShow]);

  const handleToggleShow = () => setToggle((prev) => !prev);

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
            <p className="title">1234</p>
          </div>
        </div>
      </nav>
      <div className="has-text-centered">
        <img id="couple-page-image" src={image} />
      </div>
    </>
  );
}
