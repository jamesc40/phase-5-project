import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
    <form id="signup-form" onSubmit={handleSubmit}>
      {resErrors && resErrors.length !== 0
        ? resErrors.map((error, i) => <p key={i}>{error}</p>)
        : null}
      <TextField
        variant="standard"
        name="email"
        label="Email"
        margin="normal"
        fullWidth
      />
      <TextField
        variant="standard"
        name="username"
        label="Username"
        margin="normal"
        fullWidth
      />
      <TextField
        variant="standard"
        name="password"
        label="Password"
        margin="normal"
        fullWidth
      />
      <TextField
        variant="standard"
        name="first_name"
        label="First Name"
        margin="normal"
        fullWidth
      />
      <TextField
        variant="standard"
        name="last_name"
        label="Last Name"
        margin="normal"
        fullWidth
      />
      <TextField
        variant="standard"
        name="couple_name"
        label="Couple Name"
        margin="normal"
        fullWidth
      />
      <Button variant="outlined" type="submit" sx={{ mt: 2 }}>
        click me
      </Button>
    </form>
  );
}
