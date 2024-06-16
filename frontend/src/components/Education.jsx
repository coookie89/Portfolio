import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./Experience.css";

const openUrl = (type) => {
    let url;
    if (type === 'cgu')
        url = 'https://www.cgu.edu.tw/en';
    else if (type === 'unsw')
        url = 'https://www.sinica.edu.tw/en';
    window.open(url);
};

const Experience = () => {
  return (
    <>
      <h3>Education</h3>
      <div className="exp-section" onClick={() => openUrl('cgu')}>
        <div className="exp-left">
          <h5>May 2023 - May 2025</h5>
        </div>
        <div className="exp-right">
          <h5 className="company-name">University Of New South Wales, Australia</h5>
          <p>
          Master of Information Technology (M.I.T.),<br />specialising in Database Systems<br />WAM: 81.6
          </p>
        </div>
      </div>

      <div className="exp-section" onClick={() => openUrl('unsw')}>
        <div className="exp-left">
          <h5>Sep 2018 - Sep 2022</h5>
        </div>
        <div className="exp-right">
          <h5 className="company-name">Chang Gung University, Taiwan</h5>
          <p>
          Bachelor of Science (B.S.) in Computer Science and Information Engineering<br />GPA: 3.58/4.3
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
