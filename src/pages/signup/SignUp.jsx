import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";

const theme = createTheme();

export default function SignUp() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Validation Schema ---------------------------------------------------------------------
  const validateForm = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .min(2, "Minimum Length Required")
      .max(30, "Maximum Length Occur")
      .matches(/^[a-zA-Z\s]+$/, "Numbers & Special Characters not allowed"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(2, "Minimum Length Required")
      .max(30, "Maximum Length Occur")
      .matches(/^[a-zA-Z\s]+$/, "Numbers & Special Characters not allowed"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain 8 characters, one uppercase, one lowercase, one number and one special case Character"
      ),
    confirmPassword: Yup.string()
      .required("Please enter the password again")
      .oneOf([Yup.ref("password"), null], "Passwords didn't match"),
    // tncCheck: Yup.string().required("Accept terms and conditions*"),
  });
  // ---------------------------------------------------------------------------------------

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const finaldata = {
  //     email: data.get("email"),
  //     password: data.get("password"),
  //     confirmpassword: data.get("confirmpassword"),
  //   };
  //   if (finaldata.password === finaldata.confirmpassword) {
  //     console.log("finaldata", finaldata);
  //   } else {
  //     console.log("Password and Confirm Password Not Match");
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}> */}
          <Avatar sx={{ m: 1, bgcolor: "#ff7b25" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Formik
            initialValues={{ ...initialValues }}
            validationSchema={validateForm}
            onSubmit={(value) => {
              console.log("values", value); // Add your state value
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              isValid,
              dirty,
              touched,
              values,
            }) => (
              <Box
                component="form"
                // noValidate // if we don't want to validate form
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                {/* {console.log(
                  "touched",
                  touched,
                  "errors",
                  errors,
                  "isValid",
                  isValid
                )} */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      required
                      helperText={touched.firstName && errors.firstName}
                      label="First Name"
                      name="firstName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      value={values.firstName}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={Boolean(touched.lastName && errors.lastName)}
                      fullWidth
                      required
                      helperText={touched.lastName && errors.lastName}
                      label="Last Name"
                      name="lastName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      value={values.lastName}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      required
                      helperText={touched.email && errors.email}
                      label="Email"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      value={values.email}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      fullWidth
                      required
                      helperText={touched.password && errors.password}
                      label="Password"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.password}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={Boolean(
                        touched.confirmPassword && errors.confirmPassword
                      )}
                      fullWidth
                      required
                      helperText={
                        touched.confirmPassword && errors.confirmPassword
                      }
                      label="Confirm Password"
                      name="confirmPassword"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.confirmPassword}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // value={}
                          color="primary"
                          name="tncCheck"
                          onChange={handleChange}
                          // error={Boolean(touched.tncCheck && errors.tncCheck)}
                          // helperText={touched.tncCheck && errors.tncCheck}
                          // required
                        />
                      }
                      label="Accept Terms and Conditions*"
                    />
                  </Grid>
                </Grid>
                <Button
                  color="primary"
                  disabled={Boolean(!isValid)}
                  type="submit"
                  variant="contained"
                  style={{ marginTop: "16px" }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to={"/signin"} variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
