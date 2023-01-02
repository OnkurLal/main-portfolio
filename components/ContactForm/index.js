"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Button from "../Button";

const ContactForm = () => {
  return (
    <>
      <form
        className="grid justify-items-center container bg-neutral-300 p-8 w-1/2 mx-auto"
        name="Portfolio Contact Form"
        method="post"
      >
        <input
          type="hidden"
          name="form-name"
          value="Portfolio Contact Form"
        ></input>
        <h1 className="text-2xl text-stone-800 tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
          LET&apos;S WORK
        </h1>
        <h1 className="text-2xl text-stone-800 tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
          TOGETHER
        </h1>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          className="w-3/4"
          style={{ margin: "1rem" }}
          name="First Name"
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          className="w-3/4"
          style={{ margin: "1rem" }}
          name="Last Name"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          className="w-3/4"
          style={{ margin: "1rem" }}
          name="Email"
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          className="w-3/4 text-current"
          style={{ margin: "1rem" }}
          name="Message"
        />
        <Button
          variant="contained"
          type="submit"
          style={{
            marginTop: "1rem",
            border: "2px solid rgb(41 37 36)",
            color: "rgb(41 37 36)",
            backgroundColor: "transparent",
          }}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
