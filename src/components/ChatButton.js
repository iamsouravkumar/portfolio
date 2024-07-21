import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

function ChatButton() {
  return (
    <div className="App">
      <ReactWhatsappButton
        countryCode="91"
        phoneNumber="8929174543"
        animated
        style={{backgroundColor: "#01E3F4"}}
      />
    </div>
  )
}

export default ChatButton;
