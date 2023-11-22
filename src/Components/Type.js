import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Mahasiswa Aktif UPI",
          "Learning Full Stack Developer",
          "Member Of GDSC UPI 2023/2024",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
