import React from "react";

import Navigation from "../navigation/navigation";

import "./basePage.css";

function BasePage({ description, children }) {
  return (
    <section className="BasePage">
      <header className="BasePage__header">
        <h1 className="BasePage__header--title">
          Dearest <span className="BasePage__header--title--alt">Santa</span>,
        </h1>
        <h2 className="BasePage__header--subtitle">{description}</h2>
      </header>

      <div className="BasePage__body">{children}</div>

      <footer className="BasePage__footer">
        <Navigation />
      </footer>
    </section>
  );
}

export default BasePage;
