import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="contact main-container">
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1>Contact</h1>
          <p>
          </p>
          <br />
        </div>
        <form action="" className="contact-form">
          <div>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div>
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button className="btn-submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
