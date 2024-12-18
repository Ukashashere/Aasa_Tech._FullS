/* hit ctrl+K then M, then type react, it enables react intillicence*/   /* OR we could've renamed the file to .jsx*/
/* rafce */           

import React from "react";

const Contact = () => {
  return (                                  /*This thing is the HTML part*/
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
