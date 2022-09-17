import React from "react";
import Pro1 from "../images/John-Doe.jpg";


 function AboutItem() {
      return (
  
        <section id="about-me">
          <h1>
            Hello, my name is
            <span className="rotate text-important">John doe</span>,<br />
            and i make horrible websites.
          </h1>
          <img className="avatar" src= {Pro1} alt="" />
        </section>
      )
    };

  export default AboutItem;
