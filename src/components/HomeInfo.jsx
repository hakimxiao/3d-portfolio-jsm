import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Halo semuanya saya <span className="font-semibold">Hakim</span>👋
      <br />
      Fullstack dan software engineer adalah bidang saya.
    </h1>
  ),
  2: (
    <InfoBox
      text="Saya Mempunyai banyak skill yang berguna dan berpengalaman, serta selalu menggunakan teknologi terbaru"
      link="/about"
      btnText="Jelajahi saya"
    />
  ),
  3: (
    <InfoBox
      text="Yok Mampir Ke Gerai Portfolio Saya, Siapa Tau Ada Yang Kamu Suka"
      link="/projects"
      btnText="Kunjungi portofolio saya"
    />
  ),
  4: (
    <InfoBox
      text="Butuh bantuan menyelesaikan project atau butuh seorang pengembang ? Saya siap membantu"
      link="/contact"
      btnText="Ayo hubungi saya"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
