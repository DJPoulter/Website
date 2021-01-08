import NavigationMenu from "@/components/NavigationMenu";
import emailjs from "emailjs-com";
import React from "react";

const ContactPage: React.FC<any> = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_801fdoj",
        "template_rtltheg",
        e.target,
        "user_xxCVikA3kg8z1sczGCa26"
      )
      .then(
        result => {
          // eslint-disable-next-line no-console
          console.log(result.text);
        },
        error => {
          // eslint-disable-next-line no-console
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div className="bg-Pastel-Orange dark:bg-gray-800 bg-transparent h-screen flex flex-row z-0">
        <NavigationMenu />
        <div>
          <form className="contact-form" onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
