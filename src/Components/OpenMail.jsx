import React from "react";

const openGmail = () => {
  window.open("https://mail.google.com/mail/?view=cm&to=contact@unitedtechandsolutions.com", "_blank");
};

const OpenMail = () => {
  return <button className="cursor-pointer text-[15px] lg:text-[16px]" onClick={openGmail}>contact@unitedtechandsolutions.com</button>;
};

export default OpenMail;
