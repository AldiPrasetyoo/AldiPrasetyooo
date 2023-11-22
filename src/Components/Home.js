import React from "react";
import Type from "./Type";
import './CSS/custom.css'

const Home = () => {
  return (
    <main>
      <h1 style={{ paddingBottom: 15 }} className="heading">
                Halo!{"   "}
                <span className="salam" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="judulHome">
                I'M
                <strong className="nama"> Aldi Prasetyo Widodo </strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
    </main>
  )
}

export default Home;