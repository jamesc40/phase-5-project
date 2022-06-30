import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Login() {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let loginForm = document.querySelector("#login-form");
    let form = new FormData(loginForm);

    let req = await fetch("/login", {
      method: "POST",
      body: form,
    });

    if (req.ok) {
      console.log(await req.json());
      setError("");
    } else {
      let { error } = await req.json();
      setError(error);
    }
  };

  return (
    <>
      {error.length > 0 ? <p>{error}</p> : null}
      <form id="login-form" onSubmit={handleSubmit}>
        <TextField
          variant="standard"
          name="username"
          label="Username"
          margin="normal"
          fullWidth
        />
        <TextField
          variant="standard"
          type="password"
          name="password"
          label="Password"
          margin="normal"
          fullWidth
        />
        <Button variant="outlined" type="submit" sx={{ mt: 2 }}>
          click me
        </Button>
      </form>
    </>
  );
}
