import React from "react";

import "./Footer.css";
import "./styles.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by Angelika Czerwińska and is open-sourced on
      <a
        href="https://github.com/AngelikaCz/Weather_app_project"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        {" "}
        GitHub{" "}
      </a>
      and hosted on
      <a
        href="https://sparkly-kitten-ca6639.netlify.app"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        {" "}
        Netlify.
      </a>
    </footer>
  );
}
