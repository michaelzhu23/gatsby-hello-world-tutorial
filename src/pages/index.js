import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <p>Mamba Forever</p>
      <img src="https://sportshub.cbsistatic.com/i/r/2020/01/30/a30c32f1-86e4-48f1-82ba-913a4e2ff913/thumbnail/640x360/0cd73be80d2b3a7969468d7cceb4789b/lebron-kobe-1.jpg" alt="" />
    </div>
  );
}
