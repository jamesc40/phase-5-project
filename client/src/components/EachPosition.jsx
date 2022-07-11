export default function EachPosition({ couple }) {
  const { completed_dates, name, image } = couple;
  return (
    <div className="list-item">
      <div className="list-item-image">
        <figure>
          <img className="leaderboard-images" src={image} />
        </figure>
      </div>

      <div className="list-item-content">
        <div className="list-item-title">{name}</div>
        <div className="list-item-description">
          Total Dates: {completed_dates}
        </div>
      </div>
    </div>
  );
}
