"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Button from "../Button";

const ContactForm = () => {
  return (
    <>
      <form
        data-netlify="true"
        method="POST"
        className="grid justify-items-center container bg-neutral-300 p-8 w-1/2 mx-auto"
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
          className="w-3/4 m-4"
          name="First Name"
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          className="w-3/4 m-4"
          name="Last Name"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          className="w-3/4 m-4"
          name="Email"
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          className="w-3/4 text-current m-4"
          name="Message"
        />
        <Button
          variant="contained"
          type="submit"
          className="p-2 mt-4 border-solid border-2 border-stone-600 text-stone-800"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
