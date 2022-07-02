import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Signup({ handleSetCouple }) {
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
      handleSetCouple(await req.json());
      history.push("/couple-page");
    } else {
      let { errors } = await req.json();
      setErrors(errors);
    }
  };

  return (
    <>
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
        <div className="field">
          <label className="label">Couple Picture</label>
          <div className="control">
            <input
              className="input"
              name="image"
              type="file"
              accept="image/png, image/jpg, image/gif, image/jpeg"
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-link">Submit</button>
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
