import React, { useState } from "react";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwYb6-rhcgRJkfYj-roMACNilQ-mHrDpafLxnkJRum6xURO9So4bd6rJnkjxclxWn8-/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name <= 0) {
      return toast.error("Enter you Name", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
    } else if (formData.email <= 3 || !formData.email.includes("@")) {
      return toast.error("Enter a valid email", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
    props.setloading(true);
    const form = document.forms["form_to_google_sheet"];

    const promise = await fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    }).catch((error) => console.error("Error!", error.message));

    console.log(promise.status);
    props.setloading(false);
    if (promise.status === 200) {
      toast.success("Message Sent", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
    }

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact">
      <div className="contact-body">
        <div className="contact-container">
          <div className="contact-heading">
            <h2>Contact</h2>
            <div className="contact-heading-underline"></div>
          </div>
          <div className="contact-description">
            <p>
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible.
            </p>
          </div>
          <div className="contact-body-form">
            <form name="form_to_google_sheet">
              <label htmlFor="full-name">Name</label>
              <input
                required
                value={formData.name}
                name="Name"
                type="text"
                id="name"
                placeholder="Enter your Name"
                onChange={onChange}
              />
              <label htmlFor="email">Email</label>
              <input
                required
                value={formData.email}
                name="Email"
                type="email"
                id="email"
                placeholder="Enter you email"
                onChange={onChange}
              />
              <label htmlFor="message">Message</label>
              <textarea
                required
                value={formData.message}
                name="Message"
                id="message"
                rows={100}
                cols={30}
                placeholder="Enter You Message"
                onChange={onChange}
              ></textarea>

              <button
                type="submit"
                className="contact-form-submit-button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
