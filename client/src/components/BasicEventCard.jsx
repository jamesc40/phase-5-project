export default function BasicEventCard({ event, handleLike }) {
  //console.log(event);
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
            {/*<span*/}
            {/*role="img"*/}
            {/*aria-label="smiling face with heart-eyes"*/}
            {/*class="react-emojis"*/}
            {/*style={{ "line-height": 1 }}*/}
            {/*>*/}
            😍
            {/*</span>*/}
          </button>
        </div>
        <div className="column is-narrow">
          <button
            className="button is-danger is-light"
            name="disslike"
            onClick={handleLike}
          >
            {/*<span*/}
            {/*role="img"*/}
            {/*aria-label="broken heart"*/}
            {/*class="react-emojis"*/}
            {/*style={{ "line-height": 1 }}*/}
            {/*>*/}
            💔
            {/*</span>*/}
          </button>
        </div>
      </div>
      {/*</section>*/}
      <section className="section">
        {/*</TinderCard>*/}

        {/*<div className="block">*/}
        <div className="content is-medium">
          {/*<h1>{name}</h1>*/}
          <p>{description}</p>
        </div>
        {/*</div>*/}
      </section>
    </>
  );
}
