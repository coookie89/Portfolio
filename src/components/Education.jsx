const openUrl = (type) => {
  let url;
  if (type === "cgu") url = "https://www.cgu.edu.tw/en";
  else if (type === "unsw") url = "https://www.unsw.edu.au";
  window.open(url);
};

const Experience = () => {
  return (
    <>
      <h2>Education</h2>
      <div className="card-list education">
        <div className="card flexbox card-color" onClick={() => openUrl("cgu")}>
          <div className="left">
            <div>May 2023 - May 2025</div>
          </div>
          <div className="right flexbox">
            <div className="content">
              <div className="card-title">
                University Of New South Wales, Australia
              </div>
              <p className="mt-4">
                Master of Information Technology (M.I.T.), specialising in Database Systems
              </p>
            </div>
            <div className="preview">
              <img
                alt="unsw-logo"
                src="./img/UNSW.png"
                style={{ width: "100%", borderRadius: "15%" }}
              ></img>
            </div>
          </div>
        </div>

        <div
          className="card flexbox card-color"
          onClick={() => openUrl("unsw")}
        >
          <div className="left">Sep 2018 - Sep 2022</div>
          <div className="right flexbox">
            <div className="content">
              <div className="card-title">Chang Gung University, Taiwan</div>
              <p className="mt-4">
                Bachelor of Science (B.S.) in Computer Science and Information
                Engineering
              </p>
            </div>
            <div className="preview">
              <img
                alt="cgu-logo"
                src="./img/CGU.png"
                style={{ width: "100%", borderRadius: "15%" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
