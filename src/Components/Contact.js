import React, { useRef, useState } from "react";
import lokasi from './Images/lokasi.png';
import instagram from './Images/instagram.png';
import link from './Images/linkedin.png';
import github from './Images/github.png';
import './CSS/custom.css'

const Contact = () => {
  const namaRef = useRef(null);
  const emailRef = useRef(null);
  const pesanRef = useRef(null);
  const [pesanOutput, setPesanOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nama = namaRef.current.value;
    const email = emailRef.current.value;
    const pesan = pesanRef.current.value;

    const pesanBaru = `Terima Kasih!\nNama: ${nama}\nEmail: ${email}\nKesan Pesan: ${pesan}`;
    setPesanOutput(pesanBaru);

    namaRef.current.value = '';
    emailRef.current.value = '';
    pesanRef.current.value = '';
  };

  return (
    <main>
      <div className="Contact">
        <div className="kontainer-kontak">
          <h1 className="judulC">Contact</h1>
          <table>
            <tbody>
              <tr>
                <td width="50px">
                  <a href="https://www.google.com/maps/place/Cimahi,+Kec.+Cimahi+Tengah,+Kota+Cimahi,+Jawa+Barat/@-6.8862575,107.5411216,14z/data=!3m1!4b1!4m6!3m5!1s0x2e68e43e8ebf7617:0x501e8f1fc2974e0!8m2!3d-6.8840816!4d107.5413039!16zL20vMDd5MjJo?entry=ttu">
                    <img src={lokasi} alt="lokasi" width="60px" height="60px" style={{ display: 'block' }} />
                  </a>
                </td>
                <td>
                  Cimahi, Jawa Barat, Indonesia
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <a href="https://www.instagram.com/aldiprasetyo.__">
                    <img src={instagram} alt="instagram" width="60px" height="60px" style={{ display: 'block' }} />
                  </a>
                </td>
                <td>
                  aldiprasetyo.__
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <a href="https://www.linkedin.com/in/aldi-prasetyo-widodo-940b4826a/">
                    <img src={link} alt="linkedin" width="60px" height="60px" style={{ display: 'block' }} />
                  </a>
                </td>
                <td>
                  Aldi Prasetyo Widodo
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <a href="https://github.com/AldiPrasetyoo">
                    <img src={github} alt="github" width="60px" height="60px" style={{ display: 'block' }} />
                  </a>
                </td>
                <td>
                  AldiPrasetyoo
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="form-tamu">
          <h1 className="judul">Buku-Tamu</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nama">Nama Lengkap:</label><br />
            <input type="text" id="nama" name="nama" ref={namaRef} /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" ref={emailRef} /><br /><br />
            <label htmlFor="pesan">Kesan Pesan:</label><br />
            <textarea rows="5" cols="35" ref={pesanRef}></textarea><br />
            <button type="submit">Kirim Pesan</button>
          </form>

        </div>
        <div className="output">
          <pre>{pesanOutput}</pre>
        </div>

      </div>
    </main>
  );
}

export default Contact;
