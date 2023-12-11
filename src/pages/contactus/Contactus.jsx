import React, { useState } from "react";
import "./contactus.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Contactus = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const Close = () => {
    navigate("/");
  };

  const Submit = () => {
    // console.log({ name, email, phone });
    navigate("/");
  };

  return (
    <div className="contact">
      <div className="wrapper">
        <div style={{ display: "flex", gap: "200px" }}>
          <h2 style={{ fontFamily: "sans-serif" }}>CONTACT US</h2>
          <CloseIcon onClick={Close} />
        </div>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button variant="contained" onClick={Submit}>
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Contactus;
