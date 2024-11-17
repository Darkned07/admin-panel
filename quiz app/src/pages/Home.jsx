import React from "react";
import MenuLinks from "../components/MenuLinks";

function Home() {
  return (
    <section className="home-container contaienr">
      <div className="home-content">
        <h1 className="home-title">
          <span>Welcome to the</span>
          <span>Frontend Quizz!</span>
        </h1>
        <p>Pick a subject to get started.</p>
      </div>
      <div className="home-nav-list">
        <MenuLinks />
      </div>
    </section>
  );
}

export default Home;
