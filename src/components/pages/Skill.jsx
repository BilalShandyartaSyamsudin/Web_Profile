import React from "react";

function Skill() {
  return (
    <section id="skills">
      <div className="main-container">
        <h1 className="section-titles-skills">Experience & Skills</h1>
        <div className="skills-grid">
          <div className="skills-left">
            {/* Experience 1 */}
            <div className="experience">
              <div className="line">
                <div className=""></div>
              </div>
              <div className="experience-info">
                <h4 className="experience-title">
                  Website E-Commerce “Addictive Clothing”
                </h4>
                <p>
                  {" "}
                  Mengembangkan website e-commerce menggunakan framework
                  Laravel. Mengembangkan website dari sisi fullstack dengan
                  frontend dan backend menggunakan Laravel. Menggunakan MySQL
                  untuk database.
                </p>
                <h4 className="experience-date">2022 - 2023</h4>
              </div>
            </div>
            {/* Experience 2 */}
            <div className="experience">
              <div className="line">
                <div className=""></div>
              </div>
              <div className="experience-info">
                <h4 className="experience-title">
                  Sistem Bangun Pakan Otomatis Pada Tambak Ikan Mujair
                </h4>
                <p>
                  {" "}
                  Mengembangkan system IoT pakan otomatis menggunakan esp32,
                  sensor pH dan sensor turbidity. Mengembangkan algoritma fuzzy
                  Tsukamoto untuk membuat keputusan porsi pemberian pakan.
                  Mengembangkan API dengan menggunakan PHP untuk integrasi IoT
                  dengan website. Menggunakan MySQL untuk database
                </p>
                <h4 className="experience-date">2023 - 2024</h4>
              </div>
            </div>
            {/* Experience 3 */}
            <div className="experience">
              <div className="line">
                <div className=""></div>
              </div>
              <div className="experience-info">
                <h4 className="experience-title">
                  Deteksi Kematangan Buah Kopi
                </h4>
                <p>
                  {" "}
                  Mengembangkan system object detection untuk tingkat kematangan
                  buah kopi dengan menggunakan YOLOv5. Menggunakan Raspberrypi
                  untuk IoT pemilahan kematangana buah kopi
                </p>
                <h4 className="experience-date">2023 - 2024</h4>
              </div>
            </div>
          </div>

          <div className="skills-right">
            <p>
              Selama sebagai mahasiswa di Politeknik Negeri Jember PSDKU Sidoarjo saya telah memiliki beberapa skill yang berguna untuk pemrograman.
            </p>
            <div className="skills-list">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Jacascript</li>
                <li>MySql</li>
              </ul>
              <ul>
                <li>Laravel</li>
                <li>React</li>
                <li>Express</li>
                <li>Flutter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
