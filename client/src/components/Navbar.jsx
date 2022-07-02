import { useHistory } from "react-router-dom";

export default function Navbar({ image, handleLogout, isLoggedin }) {
  const history = useHistory();

  const handleLogoutClick = async () => {
    await fetch("/logout", {
      method: "DELETE",
    });
    handleLogout();
    history.push("/");
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
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
            </div>
            <div className="navbar-end">
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
                <a className="button is-primary" href="/signup">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" href="/login">
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
