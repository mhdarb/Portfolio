import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import Address from "../../img/address.png";
import Email from "../../img/email.png";
import Phone from "../../img/phone.png";
import "./contact.css";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_aatbaks",
        "template_sfnbrsn",
        formRef.current,
        "user_yalPaPFyev1SxqhX8uwdH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 8920520275 (Mother's Contact)
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              mhdarb@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              A-126/4, Near Ashraf Masjid, Shaheen Bagh Okhla, New Delhi - 110025.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Get in Touch</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" required/>
            <input  type="text" placeholder="Subject" name="user_subject"/>
            <input  type="text" placeholder="Email" name="user_email" required/>
            <textarea  rows="5" placeholder="Message" name="message" required/>
            <button>Submit</button>
            {done && <span className="msg">Thank you...</span>}
          </form>
        </div>
      </div>
      <div className="c-ubg">Designed with <i class="far fa-heart"></i></div>
    </div>
  );
};

export default Contact;
