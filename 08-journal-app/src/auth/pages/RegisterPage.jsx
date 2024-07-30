import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container spacing={1}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ mt: 2 }}
                type="submit"
              >
                Create Account
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            justifyContent={"end"}
            sx={{ mt: 1 }}
          ></Grid>
          <Grid
            container
            direction={"row"}
            justifyContent={"end"}
            sx={{ mt: 1 }}
          >
            <Typography variant="body2" color="secondary">
              Already have an account?
              <Link
                component={RouterLink}
                sx={{ ml: 1 }}
                color={"inherit"}
                to="/auth/login"
              >
                Login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
