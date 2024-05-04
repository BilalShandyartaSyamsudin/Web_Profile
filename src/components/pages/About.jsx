import React from "react";

function About() {
  return (
    <>
      <section id="about">
        <div class="main-container">
          <h1 class="section-title-about">About</h1>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Saya tertarik pada bidang Web Development, UI/UX Design, dan IoT.
            Bidang Web Development melibatkan pembuatan situs web interaktif
            dengan menggunakan bahasa pemrograman seperti HTML, CSS, dan
            JavaScript. UI/UX Design fokus pada pengalaman pengguna yang
            intuitif dan estetika antarmuka. Sedangkan IoT menghubungkan
            perangkat fisik ke internet untuk berbagai aplikasi.
          </p>
          <br />

          <div class="grid-3">
            {/* <!-- About 1 --> */}
            <div class="about">
              <div class="about-icon">
                <img src="./src/assets/img/webdev.png" alt="" />
              </div>
              <h4>Web Development</h4>
              <p>
                Web Development adalah proses menciptakan dan memelihara situs
                web yang menarik dan fungsional menggunakan berbagai bahasa
                pemrograman. Para pengembang memperhatikan desain, keamanan, dan
                kinerja situs web.
              </p>
            </div>
            {/* <!-- About 2 --> */}
            <div class="about">
              <div class="about-icon">
                <img src="./src/assets/img/uiux.png" alt="Icon About 2" />
              </div>
              <h4>UI/UX Design</h4>
              <p>
                UI/UX Design adalah proses merancang antarmuka pengguna yang
                intuitif dan menarik untuk meningkatkan pengalaman pengguna.
                Fokus pada kegunaan, estetika, dan interaksi pengguna.
              </p>
            </div>
            {/* <!-- About 3 --> */}
            <div class="about">
              <div class="about-icon">
                <img src="./src/assets/img/IoT.png" alt="Icon About 3" />
              </div>
              <h4>IoT</h4>
              <p>
                IoT (Internet of Things) adalah konsep menghubungkan perangkat
                fisik ke internet untuk mengumpulkan dan bertukar data,
                memungkinkan kontrol dan pemantauan jarak jauh untuk berbagai
                aplikasi. Hal ini melibatkan sensor, perangkat keras, dan
                perangkat lunak yang terintegrasi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
