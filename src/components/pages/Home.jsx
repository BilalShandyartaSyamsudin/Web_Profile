import React, { useState, useEffect } from "react";

function Home() {
  const [text, setText] = useState("Bilal Shandyarta Syamsudin");
  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    const typingEffect = async () => {
      for (let i = 0; i < text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setText(text.slice(0, i + 1));
      }
      setCursor(false);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      for (let i = text.length; i > 0; i--) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setText(text.slice(0, i - 1));
      }
      setCursor(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      typingEffect();
    };
    typingEffect();
  }, []);

  return (
    <>
      <div className="main-container">
        <section id="home">
          <div className="home-left">
            <h3 className="pre-title">Hallo all I am</h3>
            <h1 className="home-name">
              {text}
              {cursor && "|"}
            </h1>
            <p>
              Saya Bilal Shandyarta Syamsudin, mahasiswa D4 Teknik Informatika
              Politeknik Negeri Jember tahun 2021. Saya telah memperdalam
              pemrograman website dan android dengan php, Laravel, dan Flutter.
              Selain itu saya juga mempelajari bahasa pemrograman Java untuk
              pengembangan aplikasi desktop. Baru – baru ini saya tertarik dan
              belajar tentang IoT, saya sedikit mempelajari mengembangkan IoT
              menggunakan Arduino UNO dan ESP32. Saya berambisi menjadi
              pengembang website, baik di bagian frontend maupun backend. Dengan
              keinginan yang kuat dan keterampilan yang terus berkembang, saya
              siap memberikan kontribusi yang signifikan dalam pengembangan web.
            </p>
            <a href="">
              <button className="btn">My Resume</button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
