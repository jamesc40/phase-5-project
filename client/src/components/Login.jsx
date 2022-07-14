import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login({ dispatch }) {
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let loginForm = document.querySelector("#login-form");
    let form = new FormData(loginForm);

    let req = await fetch("/login", {
      method: "POST",
      body: form,
    });

    if (req.ok) {
      setError("");
      localStorage.setItem("loggedIn", JSON.stringify(true));
      dispatch({ type: "load", payload: { couple: await req.json() } });
      history.push("/couple-page");
    } else {
      let { error } = await req.json();
      setError(error);
    }
  };

  return (
    <>
      <form id="login-form" onSubmit={handleSubmit}>
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
        <div className="control">
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
      </form>
      {error.length > 0 ? (
        <p className="mt-2 has-text-danger">{error}</p>
      ) : null}
    </>
  );
}
