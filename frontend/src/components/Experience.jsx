import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <h3>Experience</h3>
      <div className="exp-section">
        <div className="exp-left">
          <h5>Feb 2022 - Oct 2022</h5>
        </div>
        <div className="exp-right">
          <h5>Linebot Developer</h5>
          <h5>CHANG GUNG UNIVERSITY OF SCIENCE AND TECHNOLOGY, Taiwan</h5>
          <p>
            Developed Linebots using the LINE API SDKs, including profile page,
            patient list, Scale form, handbook of dementia care, viewing
            patient&#39;s record and exporting patient&#39;s history report in
            Excel format.
          </p>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 1 }}
            flexWrap="wrap"
            useFlexGap
          >
            <Chip label="Python" variant="outlined" />
            <Chip label="Amazon EC2" variant="outlined" />
            <Chip label="Line" variant="outlined" />
          </Stack>
        </div>
      </div>

      <div className="exp-section">
        <div className="exp-left">
          <h5>Sep 2021 - Sep 2022</h5>
        </div>
        <div className="exp-right">
          <h5>LmTraceMap</h5>
          <p>
            Tutored 30+ students in learning Python from scratch, providing
            guidance on fundamental concepts and empowered them to extract
            information from websites they are interested in.
          </p>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 1 }}
            flexWrap="wrap"
            useFlexGap
          >
            <Chip label="Python" variant="outlined" />
            <Chip label="BeautifulSoup" variant="outlined" />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Experience;
