import { useState } from "react";

export default function BeenToDateCard({ date, dispatch }) {
  const [toggleModal, setToggle] = useState(false);
  const { id } = date;
  const { name } = date.event;

  const handleModal = () => setToggle((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewForm = document.querySelector(`#review-form-${id}`);
    const form = new FormData(reviewForm);
    form.append("date_night_id", id);
    form.append("event_id", date.event.id);

    let req = await fetch("/reviews", {
      method: "POST",
      body: form,
    });

    if (req.status === 201) {
      let res = await req.json();
      dispatch({ type: "review", payload: { id: id, review: res } });
      reviewForm.reset();
      handleModal();
    }
  };

  return (
    <>
      <div className="card mb-3">
        <div className="card-header">
          <p className="card-header-title">{name}</p>
        </div>
        <div className="card-footer">
          <a
            className={
              date.review
                ? "card-footer-item has-text-grey-light"
                : "card-footer-item"
            }
            onClick={date.review ? (e) => e.preventDefault() : handleModal}
          >
            Leave a Review!
          </a>
        </div>
      </div>
      <div
        id={`modal-${id}`}
        className={toggleModal ? "modal is-active" : "modal"}
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <form id={`review-form-${id}`} onSubmit={handleSubmit}>
            <div className="rating">
              <input name="rating" value={5} id={`e5-${id}`} type="radio" />
              <label htmlFor={`e5-${id}`}>☆</label>
              <input name="rating" value={4} id={`e4-${id}`} type="radio" />
              <label htmlFor={`e4-${id}`}>☆</label>
              <input name="rating" value={3} id={`e3-${id}`} type="radio" />
              <label htmlFor={`e3-${id}`}>☆</label>
              <input name="rating" value={2} id={`e2-${id}`} type="radio" />
              <label htmlFor={`e2-${id}`}>☆</label>
              <input name="rating" value={1} id={`e1-${id}`} type="radio" />
              <label htmlFor={`e1-${id}`}>☆</label>
            </div>
            <div className="field">
              <div className="control is-medium is-loading">
                <textarea
                  className="textarea is-medium"
                  placeholder="Medium loading textarea"
                  name="content"
                ></textarea>
                <button
                  className="button is-link is-outlined mt-2 is-fullwidth"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={handleModal}
        ></button>
      </div>
    </>
  );
}
