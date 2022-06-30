import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Signup() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    let signupForm = document.querySelector("#signup-form");
    let form = new FormData(signupForm);

    let req = await fetch("/users", {
      method: "POST",
      body: form,
    });

    if (req.ok) {
      console.log(await req.json());
    } else {
      let { errors } = await req.json();
      console.log(errors);
    }
  };

  return (
    <form id="signup-form" onSubmit={handleSubmit}>
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
