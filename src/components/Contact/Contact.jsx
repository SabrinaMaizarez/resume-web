import React, { useState } from "react";
import me from "../../images/LuPixel.png";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./style.css";

export default function Contact() {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  function sendEmail(e) {
    e.preventDefault();
    if (
      !input.name ||
      !input.lastName ||
      !input.email ||
      !input.subject ||
      !input.message
    ) {
      return swal({ icon: "error", text: "Fields cannot be empty" });
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        input.email
      )
    ) {
      setInput({ ...input, email: "" });
      return swal({ icon: "error", text: "Oops! The email is not correct!" });
    }
    emailjs
      .sendForm(
        "service_hrwiw7l",
        "template_rfeqytk",
        e.target,
        "user_WGttNJoyKgqWfe5xLLDpd"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal({
            icon: "success",
            text: "Thanks for contacting me!",
          });
          setInput({
            name: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="title_skills">
        <h1>Contact me!</h1>
        <img src={me} alt="Oh no!" className="me_skills" />
      </div>
      <form className="container_form" onSubmit={sendEmail}>
        <h1>Just send me an email!</h1>
        <div className="names_contact">
          <div>
            <label>First Name</label>
            <input
              type="text"
              className="input"
              value={input.name}
              name="name"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              className="input"
              value={input.lastName}
              name="lastName"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="send_email">
          <label>Email</label>
          <input
            type="text"
            className="input"
            value={input.email}
            name="email"
            onChange={(e) => handleInputChange(e)}
          />
          <label>Subject</label>
          <input
            type="text"
            className="input"
            value={input.subject}
            name="subject"
            onChange={(e) => handleInputChange(e)}
          />
          <label>Message</label>
          <textarea
            className="input message"
            value={input.message}
            name="message"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <button type="submit" className="button_submit_contact">
          SEND
        </button>
        <div className="social_medias">
          <a
            rel="noopener noreferrer"
            target="_BLANK"
            href="https://www.linkedin.com/in/lunia98/"
          >
            <LinkedInIcon fontSize="large" style={{ color: "black" }} />
          </a>
          <a
            rel="noopener noreferrer"
            target="_BLANK"
            href="https://github.com/Lunia98"
          >
            <GitHubIcon fontSize="large" style={{ color: "black" }} />
          </a>
        </div>
      </form>
    </div>
  );
}