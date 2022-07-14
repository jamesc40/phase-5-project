import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Signup({ dispatch }) {
  const [togglePic, setToggle] = useState(true);
  const [resErrors, setErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let signupForm = document.querySelector("#signup-form");
    let form = new FormData(signupForm);

    let req = await fetch("/users", {
      method: "POST",
      body: form,
    });

    if (req.ok) {
      setErrors([]);
      localStorage.setItem("loggedIn", JSON.stringify(true));
      dispatch({ type: "load", payload: { couple: await req.json() } });
      history.push("/couple-page");
    } else {
      let { errors } = await req.json();
      setErrors(errors);
    }
  };

  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <>
      <div>
        <input
          id="signup-switch"
          className="switch is-outlined is-info"
          type="checkbox"
          checked={togglePic}
          onChange={handleToggle}
        />
        <label htmlFor="signup-switch">Joining your partner?</label>
      </div>

      <form id="signup-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              name="email"
              type="email"
              placeholder="..."
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              name="password"
              type="password"
              placeholder="..."
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Couple Name</label>
          <div className="control">
            <input
              className="input"
              name="name"
              type="text"
              placeholder="..."
            />
          </div>
        </div>
        {/*<div className="field">*/}
        {/*<label className="label">Couple Picture</label>*/}
        {/*<div className="control">*/}
        {/*<input*/}
        {/*className="input"*/}
        {/*name="image"*/}
        {/*type="file"*/}
        {/*accept="image/png, image/jpg, image/gif, image/jpeg"*/}
        {/*/>*/}
        {/*</div>*/}
        {/*</div>*/}
        {!togglePic ? (
          <>
            <div className="file has-name is-fullwidth mb-3">
              <label className="file-label">
                <input className="file-input" type="file" name="image" />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">Choose a file…</span>
                </span>
                <span className="file-name">Couple Picture goes here cuh</span>
              </label>
            </div>
          </>
        ) : null}
        <div className="control">
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
      </form>

      {resErrors && resErrors.length > 0
        ? resErrors.map((error, i) => (
            <p key={i} className="my-2 has-text-danger">
              {error}
            </p>
          ))
        : null}
    </>
  );
}
