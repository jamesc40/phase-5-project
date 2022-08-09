export default function BasicEventCard({ event, handleLike }) {
  const { id, description, name, image } = event;
  return (
    <>
      <section className="section">
        <figure id="events-page-figure">
          <img id="event-page-image" src={image} />
        </figure>
      </section>
      <div className="columns is-centered">
        <div className="column is-narrow">
          <button
            className="button is-info is-light"
            name="like"
            onClick={handleLike}
          >
            😍
          </button>
        </div>
        <div className="column is-narrow">
          <button
            className="button is-danger is-light"
            name="disslike"
            onClick={handleLike}
          >
            💔
          </button>
        </div>
      </div>
      <section className="section">
        <div className="content is-medium">
          <p>{description}</p>
        </div>
      </section>
    </>
  );
}
