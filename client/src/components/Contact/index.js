import emailjs from "emailjs-com";
import { init } from 'emailjs-com';
import {
  ContactContainer,
  ContactH1,
  ContactForm,
  ContactFormInput
} from './ContactElements'
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-scroll";


const Contact = () => {
  init("user_WAu4mjIWjptAnoSayM47p");
  const form = useRef();
  let history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4n2kftz",
        "template_vvfi6jq",
        form.current,
        "user_WAu4mjIWjptAnoSayM47p"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    history.push("/");
  };

  return (
    <ContactContainer id='contact'>
      <ContactH1>Send me an Email!</ContactH1>
      <ContactForm>
        <ContactFormInput>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder='Name:' className='input' id='input-name' />
          <br />
            <input type="email" name="from_email" placeholder='Email:' className='input' id='input-email' />
          <br />
            <textarea name="message" placeholder='Message:' className='input'/>
                <br />
            <Button type="submit" value="Send" className='sendbtn' id='submit-btn' />
            </form>
          </ContactFormInput>
        </ContactForm>

      {/* <hr /> */}
      </ContactContainer>
  );
};

export default Contact;