import { useHistory } from "react-router-dom";

export default function Navbar({ dispatch, isLoggedin }) {
  //const { summary, temperature } = weather;
  const history = useHistory();

  const handleLogoutClick = async () => {
    await fetch("/logout", {
      method: "DELETE",
    });
    dispatch({ type: "logout" });
    history.push("/");
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/about">
          <img src="../../weretwologo1.png" width="85" height="auto" />
        </a>
      </div>
      <div className="navbar-menu">
        {isLoggedin ? (
          <>
            <div className="navbar-start">
              <a className="navbar-item" href="/couple-page">
                Home
              </a>
              <a className="navbar-item" href="event-page">
                Date Ideas
              </a>
              <a className="navbar-item" href="leaderboard-page">
                Leaderboard
              </a>
            </div>
            <div className="navbar-end">
              {/*{Object.keys(weather).length ? (*/}
              {/*<>*/}
              {/*<div className="navbar-item">*/}
              {/*<p>{summary}</p>*/}
              {/*</div>*/}
              {/*<div className="navbar-item">*/}
              {/*<p>{Math.ceil(temperature)}ºF</p>*/}
              {/*</div>*/}
              {/*</>*/}
              {/*) : null}*/}
              <div className="navbar-item">
                <a className="button is-light" onClick={handleLogoutClick}>
                  Log out
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-info" href="/signup-page">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" href="/login-page">
                  Log in
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
