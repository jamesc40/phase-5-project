export default function EachPosition({ couple, index }) {
  const { completed_dates, name, image, leaderboard_position } = couple;
  //console.log(couple);
  return (
    <div className="list-item">
      <h1 className="is-size-1 mr-2">{`${leaderboard_position}`}</h1>
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
