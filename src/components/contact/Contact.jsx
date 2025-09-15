import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail style={{ color: "white" }} />,
    title: "Email",
    info: "ahmedalkhattip@gmail.com",
    link: "mailto:ahmedalkhattip@gmail.com",
    color: "white",
  },
  {
    id: 1,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Ahmed Eissa",
    link: "https://m.me/ahmed.alkhattip.1",
    color: "var(--color-primary)",
  },
  {
    id: 1,
    icon: <BsWhatsapp style={{ color: "green" }} />,
    title: "WhatsApp",
    info: "01119328326",
    link: "https://api.whatsapp.com/send?phone=01119328326",
    color: "green",
  },
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m263qfl",
      "template_izosouq",
      form.current,
      "9yxLTi1Gn9HRDMKwN"
    );
    e.target.reset();
  };
  return (
    <section className="contact" id="contact">
      <div className="top-section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact-container">
        <div className="contact-options">
          {ContactData.map(({ id, icon, title, info, link, color }) => (
            <div className="contact-option" key={id}>
              {icon}
              <h4 style={{ color }}>{title}</h4>
              <h5 style={{ color: "var(--color-light)" }}>{info}</h5>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Contact
              </a>
            </div>
          ))}
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="insert Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
