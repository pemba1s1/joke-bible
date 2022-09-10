import React from 'react';
import FooterImg from '../../assets/assets_Homework_Front-End_01/bitmap_2.png';
import SubmitArrow from '../../assets/assets_Homework_Front-End_01/path-copy-2.png';

export const Footer = () => {
  return (
    <div className="relative footer-banner">
      <img className="content-fit" src={FooterImg} alt="a"></img>
      <div className="absolute footer-content">
        <p>GOT JOKES? GET PAID</p>
        <p>FOR SUBMITTING!</p>
        <br />
        <button className="btn-alt">
          SUBMIT JOKE<img src={SubmitArrow} alt="x"></img>
        </button>
      </div>
    </div>
  );
};
