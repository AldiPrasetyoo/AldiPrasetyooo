import React from "react";
import C from './Images/c-.png';
import HTML from './Images/html-5.png';
import CSS from './Images/css.png';
import JAVA from './Images/java.png';
import './CSS/custom.css'

const About = () => {
  return (
    <main>
      <div className="kontainer-ab">
      <h2 className="jdl">
                Know Who<strong className="nama"> I'M </strong>
              </h2>
      </div>
      <div className="about">
        <p className="ab"> 
          Halo, Nama saya <strong className="nama">Aldi Prasetyo Widodo</strong>. Saya merupakan mahasiswa aktif S1 program studi Pendidikan Ilmu
          Komputer di Universitas Pendidikan Indonesia. Dalam masa studi ini, saya
          sering kali mengikuti kepanitiaan yang diadakan oleh Badan Eksekutif
          Mahasiswa baik tingkat internal Ilmu Komputer maupun Fakultas. Selain
          mengikuti kegiatan yang berada di kampus, seringkali saya mengikuti
          pelatihan-pelatihan yang diadakan oleh Dicoding dan perusahaan lainnya
          yang memberikan pelatihan pada bidang Software Engineering atau
          pengembangan website.
        </p>
      <pre className="aktivitas">
          Beberapa Aktivitas Yang Saya Suka :
            ✔ Bermain Game
            ✔ Mengikuti Kepanitiaan
            ✔ Mengikuti Bootcamp
      </pre>

        <br />

      <h2 className="jdl">
                Kemampuan Skill
              </h2>
        <div className="ftS">
              <img src={C} alt="C" />
              <img src={HTML} alt="HTML" />
              <img src={CSS} alt="CSS" />
              <img src={JAVA} alt="JAVA" className="b" />
      </div>
      </div>
    </main>
  );
}

export default About;
