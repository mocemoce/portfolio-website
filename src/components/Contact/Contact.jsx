import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">Don't like forms? Send me a 📧.</p>
        </div>

        <form action="" className="contact_from">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input type="text" placeholder='Enter your name' className="contact_from-input" />
            </div>
            <div className="contact_form-div">
              <input type="text" placeholder='Enter your email' className="contact_from-input" />
            </div>
          </div>

          <div className="contact_form-div">
              <input type="text" placeholder='Enter your subject' className="contact_from-input" />
            </div>
            <div className="contact_form-div">
              <textarea name="" id="" cols="30" rows="10" placeholder='Write your message' className="contact_form-input"></textarea>
            </div>

            <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
