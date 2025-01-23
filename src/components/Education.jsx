import "./Experience.css";

const openUrl = (type) => {
  let url;
  if (type === "cgu") url = "https://www.cgu.edu.tw/en";
  else if (type === "unsw") url = "https://www.sinica.edu.tw/en";
  window.open(url);
};

const Experience = () => {
  return (
    <>
      <h2>Education</h2>
      <div className="card-list education">
        <div
          className="card flexbox card-color"
          onClick={() => openUrl("cgu")}
        >
          <div className="left">
            <div>May 2023 - May 2025</div>
          </div>
          <div style={{ width: "60%" }}>
            <div className="company-name">
              University Of New South Wales, Australia
            </div>
            <p className="mt-4">
              Master of Information Technology (M.I.T.),
              <br />
              specialising in Database Systems
            </p>
          </div>
          <div style={{ width: "15%" }}>
            <img
              alt="cgu-logo"
              src="./img/UNSW.png"
              style={{ width: "100%", borderRadius: "15%" }}
            ></img>
          </div>
        </div>

        <div
          className="card flexbox card-color"
          onClick={() => openUrl("unsw")}
        >
          <div className="left">Sep 2018 - Sep 2022</div>
          <div style={{ width: "60%" }}>
            <div className="company-name">Chang Gung University, Taiwan</div>
            <p className="mt-4">
              Bachelor of Science (B.S.) in Computer Science and Information
              Engineering
            </p>
          </div>
          <div style={{ width: "15%" }}>
            <img
              alt="cgu-logo"
              src="./img/CGU.png"
              style={{ width: "100%", borderRadius: "15%" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
