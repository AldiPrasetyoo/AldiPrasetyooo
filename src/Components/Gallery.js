import React from "react";
import ft1 from './Images/1.jpg';
import ft2 from './Images/2.jpg';
import ft3 from './Images/3.jpg';
import ft4 from './Images/4.jpg';
import ft5 from './Images/5.jpg';
import ft6 from './Images/6.jpg';
import ft7 from './Images/7.jpg';
import ft8 from './Images/8.jpg';
import ft9 from './Images/9.jpg';
import ft10 from './Images/10.jpg';
import './CSS/custom.css'

const Gallery = () => {
  return (
    <main>
      <div className="bg">
        <div className="galeri">
          <div className="tampil">
            <figure>
              <img src={ft1} 
              alt="ft1" />
            </figure>
          </div>
          <div className="tampil">
            <figure>
              <img src={ft2} 
              alt="ft2" />
            </figure>
          </div>
          <div className="tampil">
            <figure>
              <img src={ft3} 
              alt="ft3" />
            </figure>
          </div>
          <div className="tampil">
            <figure>
              <img src={ft4} 
              alt="ft4" />
            </figure>
          </div>
          <div className="tampil">
            <figure>
              <img src={ft5} 
              alt="ft5" />
            </figure>
          </div>
          <div className="tampil">
            <figure>
              <img src={ft6} 
              alt="ft6" />
            </figure>
          </div>
          <div className="tampil">
            <figure>
              <img src={ft7} 
              alt="ft7" />
            </figure>
          </div>
          <div className="tampil">
            <figure>
              <img src={ft8} 
              alt="ft8" />
            </figure>
          </div>
          <div className="tampil">
            <figure>
              <img src={ft9} 
              alt="ft9" />
            </figure>
          </div>
          <div className="tampil">
            <figure>
              <img src={ft10} 
              alt="ft10" />
            </figure>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Gallery;