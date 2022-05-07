import React, { useState } from "react";
import Button from "../../Elements/Button";
import axios from "axios";
import TextField from "../../Elements/TextField";
import { Grid } from "@mui/material";

export default function ContactUsForm({ setOpenContactForm }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emailData, setEmail] = useState();
  const [commentsData, setComments] = useState();

  const handleSubmit = async () => {
    setOpenContactForm(false);
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: emailData,
      comments: commentsData,
    };

    await axios.post("/api/leads/contact_us/", {
      data,
    });
  };

  return (
    <>
      <Grid container columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            required
            onChange={(e) => setFirstName(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            required
            onChange={(e) => setLastName(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            rows={5}
            required
            id="comments"
            label="Comments"
            type="text"
            fullWidth
            onChange={(e) => setComments(e.target.value)}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Button
        sx={{
          marginTop: 4,
          marginBottom: 2,
        }}
        type="submit"
        disabled={!firstName || !lastName || !emailData || !commentsData}
        size="large"
        color="secondary"
        fullWidth
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </>
  );
}
