export default function EventCard({ event }) {
  const { average_rating, image, name, description, website, reviews } = event;

  return (
    <div
      style={{ backgroundImage: "url(" + image + ")" }}
      className="eventCard"
    >
      <h3>{name}</h3>
      <p>Average Rating: {average_rating}</p>
    </div>
  );
}
